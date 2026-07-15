# Copilot Personalized Instructions

## Contexto do Projeto

- Portfólio pessoal, futura marca pessoal.
- Projeto Next.js com TypeScript.
- Utiliza componentes em src/components.

## Tecnologias Utilizadas

### Estrutura de Pastas

## Preferências de Código

- Use TypeScript sempre que possível.
- Prefira funções de componentes (React).
- Siga o padrão de pastas já existente.

## Estilo

- Use eslint e prettier para formatação.
- Siga as regras do arquivo eslint.config.mjs.

## Exemplos de Prompts

- “Crie um componente de botão acessível.”
- “Adicione testes unitários para Footer.”

## Outras Observações

- Explique decisões de arquitetura quando sugerir mudanças grandes.

## Arquivos de Instruções Específicos

O projeto possui arquivos de instruções específicos para padronizar e orientar o uso do Copilot e de outros assistentes de IA. Consulte cada um conforme o contexto:

- [type.instructions.md](instructions/type.instructions.md): Padrões para definição e uso de tipos (TypeScript), incluindo boas práticas, nomenclatura e importação de tipos do React.
- [colors.instructions.md](instructions/colors.instructions.md): Guia para uso de cores, tokens, classes utilitárias, dark mode e shadows no design system.
- [accessibility.instructions.md](instructions/accessibility.instructions.md): Diretrizes de acessibilidade para componentes e interfaces.
- [unit-tests.instructions.md](instructions/unit-tests.instructions.md): Regras para escrita de testes unitários, incluindo idioma (sempre inglês), uso de should nas descrições, priorização de data-testid e sugestão de implementação caso não exista.

Esses arquivos estão localizados em [.github/instructions/](instructions/) e devem ser seguidos por todos os contribuidores e ferramentas automatizadas.

## Arquivos de Prompts Disponíveis

O projeto também possui prompts customizados para automação de mensagens de commit, merge requests e code review:

- [commit.prompt.md](prompts/commit.prompt.md): Prompt para geração de mensagens de commit semânticas seguindo Conventional Commits. Explica estrutura, exemplos e boas práticas para versionamento.
- [code-review.prompt.md](prompts/code-review.prompt.md): Prompt para revisão de código, incluindo checklist de boas práticas para React, frontend, código limpo, idioma dos comentários, exemplos e JSDoc (sempre em inglês), além de reforçar o uso e consulta de todos os arquivos de instrução.

Esses arquivos estão em [.github/prompts/](prompts/) e podem ser utilizados por agentes, bots ou desenvolvedores para padronizar o fluxo de contribuição.
