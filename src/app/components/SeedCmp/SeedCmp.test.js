import React from "react";
import { shallow } from "enzyme";
import SeedCmp from "./SeedCmp";

describe("MyComponent", () => {
  it("should render correctly", () => {
    const message = "aMessage";
    const component = shallow(<SeedCmp greeting={message} />);
    expect(component).toMatchSnapshot();
    expect(component.find(".seed__message").text()).toEqual(message);
  });
});
