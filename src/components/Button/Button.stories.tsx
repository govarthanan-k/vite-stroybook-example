import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Click me",
  },
};
