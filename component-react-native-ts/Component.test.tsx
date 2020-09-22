import React from "react";
import { render } from "@testing-library/react-native";
import {{className}} from "./{{className}}";

describe("{{className}} component", () => {
  const snapshot = render(<{{className}}>Hello world!</{{className}}>).toJSON();

  test("should render the expected markup", () => {
    expect(snapshot).toMatchSnapshot();
  });
});
