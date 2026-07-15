## Instruções para testes unitários

Estas instruções definem o padrão para a escrita de testes unitários neste projeto. Siga as orientações abaixo para garantir clareza, padronização e facilidade de manutenção.

1. _Idioma_: Todos os arquivos de teste, descrições e comentários dos testes devem ser escritos em inglês.

2. _Descrição dos testes_: Toda descrição de bloco it ou test deve começar com should e descrever claramente o comportamento esperado. Exemplo:

   js
   it('should render the button with correct label', () => { ... })

3. _Seletores_: Sempre priorize o uso de data-testid para buscar elementos nos testes. Evite usar seletores por texto, classe ou tag, a menos que seja estritamente necessário.

4. _Ausência de testid_: Se o componente não possuir um data-testid relevante, sugira implementá-lo no componente antes de prosseguir com o teste.

5. _Clareza e cobertura_: Os testes devem ser claros, objetivos e cobrir os principais comportamentos e casos de borda do componente.

6. _Boas práticas_: Siga as boas práticas do testing-library e evite testar detalhes de implementação.

Consulte também as instruções de [type](type.instructions.md) para garantir que os testes estejam alinhados com os padrões do projeto.
