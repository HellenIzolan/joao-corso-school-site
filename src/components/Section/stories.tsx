import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Section from '.'

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {
  args: {
    title: 'Section Title',
    description: 'This is a section description',
    children: <p>Section content goes here</p>,
  },
}

export const WithImageLeft: Story = {
  args: {
    title: 'Section with Image',
    description: 'This section has an image on the left',
    imageSrc: '/images/joao-corso-frente-atual.jpg',
    imageAlt: 'School facade',
    imagePosition: 'left',
    children: <p>Content displayed alongside the image</p>,
  },
}

export const WithImageRight: Story = {
  args: {
    title: 'Section with Image',
    description: 'This section has an image on the right',
    imageSrc: '/images/joao-corso-frente-atual.jpg',
    imageAlt: 'School facade',
    imagePosition: 'right',
    children: <p>Content displayed alongside the image</p>,
  },
}

export const OnlyContent: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Custom Content</h3>
        <p>Section without predefined title and description</p>
      </div>
    ),
  },
}
