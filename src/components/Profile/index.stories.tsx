import { Profile } from "./";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
