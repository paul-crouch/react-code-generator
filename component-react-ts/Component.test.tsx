import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import {{componentName}} from "./{{componentName}}";

describe("Given the {{componentName}} component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<{{componentName}} />);
  });

  it("should render the expected markup", () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
