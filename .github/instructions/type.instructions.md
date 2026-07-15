## Instruções para Tipos (TypeScript)

### Objetivo

Padronizar a criação, uso e manutenção de tipos no projeto para garantir consistência, legibilidade e segurança de tipos.

### Diretrizes Gerais

- Prefira interface para objetos e type para aliases, unions e tipos primitivos.
- Use nomes descritivos e no formato PascalCase para tipos e interfaces.
- Evite o uso de any. Prefira tipos mais restritivos ou genéricos.
- Documente tipos complexos com comentários JSDoc.
- Todos os comentários JSDoc devem ser escritos em inglês.
- Exporte todos os tipos públicos dos arquivos index.ts de cada pasta.
- Para componentes, defina props como Props e exporte como NomeDoComponenteProps.
- Utilize utilitários do TypeScript como Partial, Pick, Omit quando necessário.
- Prefira tipos explícitos em funções públicas.
- Importe tipos do React de forma explícita, como ReactNode, usando import type { ReactNode } from 'react'.

### Exemplos

ts
// Correto
export interface User {
id: string;
name: string;
email?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

// Props de componente
export interface ButtonProps {
label: string;
onClick: () => void;
}
