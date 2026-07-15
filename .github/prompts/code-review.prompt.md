## Code Review Prompt

Ao revisar código neste repositório, siga as diretrizes abaixo para garantir qualidade, consistência e manutenibilidade do código:

### Boas práticas gerais

- O código deve ser limpo, legível e fácil de manter.
- Evite duplicação e complexidade desnecessária.
- Prefira funções e componentes pequenos, com responsabilidade única.
- Nomeie variáveis, funções e componentes de forma clara e descritiva.
- Remova código morto, comentários desnecessários e console.logs antes de aprovar.

### React e Frontend

- Componentes devem ser funcionais e priorizar hooks ao invés de classes.
- Use hooks customizados para lógica reutilizável.
- Separe lógica de apresentação e de negócio sempre que possível.
- Prefira composição de componentes ao invés de herança.
- Garanta acessibilidade e responsividade.
- Utilize TypeScript para tipagem.

### Comentários, Storybook e JSDoc

- Todos os comentários no código devem ser escritos em inglês.
- Exemplos e descrições no Storybook devem ser sempre em inglês.
- Documentação JSDoc deve ser sempre em inglês.

### Testes

- Siga as instruções do arquivo [unit-test.instructions.md](../instructions/unit-test.instructions.md).
- Testes devem ser claros, priorizar o uso de data-testid e ter descrições iniciando com should.

### Storybook

- Siga as instruções do arquivo [storybook.instructions.md](../instructions/storybook.instructions.md).
- Os exemplos devem ser úteis, claros e em inglês.

### Acessibilidade

- Siga as instruções do arquivo [accessibility.instructions.md](../instructions/accessibility.instructions.md)

### Tipagem

- Siga as instruções do arquivo [type.instructions.md](../instructions/type.instructions.md).

### Outras instruções

- Sempre consulte e siga todas as instruções presentes na pasta [../instructions](../instructions/).

---

Checklist para revisão:

- [ ] O código está limpo, legível e bem nomeado?
- [ ] Segue as boas práticas de React e frontend?
- [ ] Comentários, JSDoc e exemplos estão em inglês?
- [ ] Testes seguem o padrão definido?
- [ ] Storybook está em inglês e segue o padrão?
- [ ] Acessibilidade e cores estão corretos?
- [ ] Tipagem está adequada?
- [ ] Todas as instruções da pasta .github/instructions foram seguidas?
