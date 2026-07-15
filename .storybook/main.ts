import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { StorybookConfig } from '@storybook/nextjs-vite'
import { mergeConfig } from 'vite'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

const rootDir = path.resolve(dirname, '..')

const config: StorybookConfig = {
  stories: [
    '../app/**/stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) =>
    mergeConfig(config, {
      resolve: {
        alias: {
          '@/app': path.resolve(rootDir, 'app'),
          '@/constants': path.resolve(rootDir, 'src/constants.ts'),
          '@/components': path.resolve(rootDir, 'src/components'),
          '@/routes': path.resolve(rootDir, 'app/routes.ts'),
          '@/tokens': path.resolve(rootDir, 'src/tokens.ts'),
        },
      },
    }),
}
export default config
