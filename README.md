# 💜 Planej.ai — Planejamento Financeiro Inteligente

O **Planej.ai** é uma aplicação web de planejamento financeiro que utiliza Inteligência Artificial para ajudar pessoas a compreender sua situação financeira, avaliar objetivos e encontrar possibilidades para organizar melhor seu dinheiro.

Através de uma simulação financeira, a aplicação utiliza a API do Google Gemini para gerar análises personalizadas, diagnósticos e sugestões de organização financeira.

## ✨ Funcionalidades

- **Simulação financeira:** preenchimento de informações para avaliar objetivos e condições financeiras.
- **Análise com IA:** geração de diagnósticos e recomendações utilizando Google Gemini.
- **Viabilidade financeira:** avaliação do planejamento e identificação de possíveis ajustes.
- **Sugestões personalizadas:** recomendações para organização financeira e possibilidades de renda extra.
- **Investimentos:** sugestões introdutórias relacionadas ao planejamento financeiro.
- **Histórico de simulações:** armazenamento local das simulações realizadas.
- **Tema claro e escuro:** interface com suporte aos dois temas.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React | Construção da interface |
| TypeScript | Tipagem e organização do código |
| Vite | Ambiente de desenvolvimento |
| React Router | Navegação entre páginas |
| Lucide React | Ícones |
| Google Gemini API | Inteligência Artificial |
| LocalStorage | Persistência local de dados |
| CSS | Estilização da aplicação |

## 📂 Estrutura do projeto

```text
planejai/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── features/
│   │   ├── layout/
│   │   └── shared/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Chave de API do Google Gemini.

### 1. Clone o repositório

```bash
git clone https://github.com/Brtkviktor/Planej.ai.git
```

### 2. Entre na pasta do projeto

```bash
cd Planej.ai
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a variável de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GEMINI_API_KEY=sua_chave_aqui
```

Obtenha sua chave no [Google AI Studio](https://aistudio.google.com/apikey).

### 5. Execute a aplicação

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

## 🔐 Segurança

O arquivo `.env` contém informações sensíveis e não deve ser enviado ao GitHub.

**Importante:** como a integração atual utiliza Vite no frontend, variáveis com prefixo `VITE_` ficam acessíveis no navegador. Para uma implantação em produção, recomenda-se migrar a comunicação com o Gemini para um backend, protegendo a chave de API.

## 🎯 Objetivo do projeto

O Planej.ai foi desenvolvido como um projeto de aprendizado e portfólio, com o objetivo de praticar desenvolvimento frontend, integração com Inteligência Artificial, organização de componentes, gerenciamento de estado e persistência de dados.

## 📌 Status

**Em desenvolvimento.**

Novas funcionalidades, melhorias de interface e aprimoramentos na integração com Inteligência Artificial estão planejados.

## 👨‍💻 Desenvolvedor

Desenvolvido por **Brtkviktor**.

- GitHub: [@Brtkviktor](https://github.com/Brtkviktor)
- Repositório: [Planej.ai](https://github.com/Brtkviktor/Planej.ai)

---

*Planej.ai — Organize hoje, planeje o amanhã.* 💜

> As análises e sugestões geradas pela inteligência artificial têm finalidade informativa e educacional, não substituindo a orientação de um profissional financeiro.
