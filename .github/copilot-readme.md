# Configurações do GitHub Copilot

Este diretório contém as configurações personalizadas do GitHub Copilot para o repositório [joao-corso-school-site](../README.md).

## Estrutura

.github/
├── copilot-readme.md # Este arquivo
├── copilot-instructions.md # Instruções gerais do repositório
├── instructions/ # Instruções específicas por contexto
├── instructions/ # Instruções específicas por contexto
│ ├── accessibility.instructions.md
│ ├── colors.instructions.md
│ ├── type.instructions.md
│ └── unit-tests.instructions.md
└── prompts/ # Prompts reutilizáveis
├── code-review.prompt.md
└── commit.prompt.md

## Arquivos de Instrução

### [copilot-instructions.md](copilot-instructions.md)

Instruções gerais aplicadas em todo o repositório:

- Estrutura do projeto
- Convenções de código e design system
- Boas práticas de acessibilidade, tipagem, testes, cores e Storybook

### [instructions/](instructions/)

Instruções específicas para contextos ou arquivos:

- [accessibility.instructions.md](instructions/accessibility.instructions.md): Acessibilidade em componentes
- [colors.instructions.md](instructions/colors.instructions.md): Uso de cores e tokens
- [type.instructions.md](instructions/type.instructions.md): Tipagem em TypeScript
- [unit-tests.instructions.md](instructions/unit-tests.instructions.md): Testes unitários

## Prompts Reutilizáveis

### [prompts/](prompts/)

Prompts customizados para automação de tarefas:

- [commit.prompt.md](prompts/commit.prompt.md): Mensagens de commit semânticas
- [code-review.prompt.md](prompts/code-review.prompt.md): Checklist de code review

## Como Funciona

- Instruções em copilot-instructions.md são aplicadas globalmente.
- Instruções em instructions/ são aplicadas conforme contexto ou tipo de arquivo.
- Prompts em prompts/ podem ser usados no Copilot Chat ou por agentes para padronizar tarefas.

## Boas Práticas

- Seja objetivo e específico nas instruções.
- Use exemplos e links relativos para facilitar a navegação.
- Mantenha as instruções e prompts atualizados conforme o projeto evolui.

## Documentação Oficial

- [GitHub Copilot Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
- [VS Code Copilot Customization](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Prompt Files Documentation](https://code.visualstudio.com/docs/copilot/customization/prompt-files)

## Feedback e Melhorias

Este é um sistema vivo! Se você identificar:

- Instruções que podem ser melhoradas
- Novos contextos que precisam de instruções específicas
- Prompts úteis para tarefas comuns

Queremos garantir que as instruções sejam claras, úteis e evoluam com as necessidades do projeto.
