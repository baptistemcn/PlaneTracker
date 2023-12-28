import { render } from "@testing-library/react";
import PlaneTracker from ".";

describe("index page", () => {
  it("should render", () => {
    render(<PlaneTracker />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<PlaneTracker />);

    const title = getByTestId("title");

    expect(title).toBeTruthy();
    expect(title).toBeDefined();
  });
});
