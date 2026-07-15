import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Hero from './index'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {}
