import { Nav } from "./";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  component: Nav,
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
