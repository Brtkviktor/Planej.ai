
interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[]
    }
  }[]
}

export interface InsightData {
  feasibility: {
    status: 'viable' | 'needs_adjustment' | 'unfeasible'
    content: string
  }
  diagnosis: {
    content: string
  }
  suggestions: {
    items: string[]
  }
  extraIncome: {
    items: string[]
  }
  investment: {
    items: string[]
  }
  motivation: {
    content: string
  }
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const MODEL_NAME = 'gemini-3.5-flash-lite'

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const callGeminiAPI = async (prompt: string) => {
  if (!API_KEY) {
    throw new Error('Chave da API Gemini não encontrada. Verifique o .env.')
  }

  for (let attempt = 0; attempt < 3; attempt++) {
    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    })

    if (response.ok) {
      return (await response.json()) as GeminiResponse
    }

    if (![429, 500, 502, 503, 504].includes(response.status)) {
      const error = await response.json()
      throw new Error(error.error?.message || 'Erro na API Gemini.')
    }

    if (attempt === 2) {
      throw new Error('Gemini temporariamente indisponível. Tente novamente.')
    }

    await sleep(1000 * 2 ** attempt)
  }

  throw new Error('Não foi possível obter uma resposta do Gemini.')
}

export const getInsight = async (prompt: string): Promise<InsightData> => {
  const response = await callGeminiAPI(prompt)

  const json = response.candidates?.[0]?.content?.parts?.[0]?.text

  if (!json) {
    throw new Error('A API Gemini não retornou uma resposta válida.')
  }

  return JSON.parse(json) as InsightData
}
