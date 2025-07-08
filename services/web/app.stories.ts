import type { Meta, StoryObj } from '@storybook/vue3'
import App from '~~/app.vue'

const meta: Meta<typeof App> = {
  component: App,
  render: (args) => ({
    components: { App },
    setup: () => ({ args }),
    template: `
     <App/>
   `,
  }),
}

export default meta

type Story = StoryObj<typeof App>

export const Default: Story = {}
