import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, userEvent } from "@storybook/testing-library";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Click me",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = await canvas.findByRole("button", { name: args.label });
    await userEvent.click(btn);
  },
};
