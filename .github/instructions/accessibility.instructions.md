# Instruções de Acessibilidade

## Objetivo

Garantir que todos os componentes e páginas do projeto sejam acessíveis, seguindo boas práticas e padrões internacionais.

## Princípios Gerais

- Utilize elementos HTML semânticos sempre que possível
- Garanta navegação por teclado (tabindex, foco visível)
- Assegure contraste adequado entre texto e fundo
- Forneça textos alternativos para imagens (alt)
- Use atributos ARIA apenas quando necessário e corretamente (aria-label, aria-labelledby, aria-describedby)
- Evite depender apenas de cor para transmitir informações

## Checklist para PRs

- [ ] Todos os elementos interativos são acessíveis por teclado
- [ ] Imagens possuem texto alternativo descritivo
- [ ] O contraste de cores atende ao padrão WCAG AA
- [ ] Componentes possuem roles e atributos ARIA apropriados
- [ ] Não há armadilhas de foco
- [ ] Labels e descrições são claros para leitores de tela

## Ferramentas de Teste

- [axe](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [NVDA](https://www.nvaccess.org/)
- [VoiceOver](https://www.apple.com/accessibility/mac/voiceover/)

## Aria-labels dinâmicos

Nunca defina aria-labels fixos nos componentes do design system. Sempre permita que o valor do aria-label seja recebido via props ou parâmetros, para que quem for utilizar o componente possa definir o texto adequado ao contexto de uso, incluindo tradução e acessibilidade específica. Isso garante flexibilidade, internacionalização e melhor experiência para todos os usuários.

## Exemplos

tsx
// Botão com ícone acessível
<button aria-label="Close" type="button">
<CloseIcon />
</button>

// Imagem com texto alternativo
<img src="logo.png" alt="Logo da empresa" />
