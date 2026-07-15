import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import About from '.'

const meta: Meta<typeof About> = {
  title: 'Components/About',
  component: About,
}

export default meta
type Story = StoryObj<typeof About>

export const Default: Story = {}
