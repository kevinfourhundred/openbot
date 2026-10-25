import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { StoryConversation } from "./conversation-story-support";

const meta = {
  title: "Conversation/Column",
  component: StoryConversation,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof StoryConversation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wide: Story = {
  render: (args) => (
    <div style={{ width: "1600px", height: "100vh" }}>
      <StoryConversation {...args} />
    </div>
  ),
};

export const Narrow: Story = {
  render: (args) => (
    <div style={{ width: "480px", height: "100vh" }}>
      <StoryConversation {...args} />
    </div>
  ),
};
