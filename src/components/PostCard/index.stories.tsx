import { title } from "process";
import { PostCard } from "./";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const postData = {
  title: "Post Title",
  date: new Date("2021-01-01"),
};

export const Primary: Story = {
  args: { postData },
};
