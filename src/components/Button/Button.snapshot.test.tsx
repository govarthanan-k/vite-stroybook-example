import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

test("Primary Button Snapshot", () => {
  const { container } = render(<Primary />);
  expect(container.firstChild).toMatchSnapshot();
});
