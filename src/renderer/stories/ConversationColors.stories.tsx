import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { CONVERSATION_STORY_ARGS, StoryConversation } from "./conversation-story-support";
import { requireFixture } from "./fixtures";

const agent = requireFixture(CONVERSATION_STORY_ARGS.agent, "Conversation color agent");

const meta = {
  title: "Conversation/Agent colors",
  component: StoryConversation,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof StoryConversation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pink: Story = { args: { agent: { ...agent, avatarHue: 320 } } };
export const Blue: Story = { args: { agent: { ...agent, avatarHue: 215 } } };
export const Yellow: Story = { args: { agent: { ...agent, avatarHue: 55 } } };
export const Violet: Story = { args: { agent: { ...agent, avatarHue: 245 } } };
