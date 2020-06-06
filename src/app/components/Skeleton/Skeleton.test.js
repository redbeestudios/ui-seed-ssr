import React from "react";
import { shallow } from "enzyme";
import Skeleton from "./index";

describe("Skeleton", () => {
  it("should render correctly", () => {
    const component = shallow(<Skeleton />);
    expect(component).toMatchSnapshot();
    expect(component.find(".skeleton__content")).toHaveLength(1);
  });

  it("should render a number of times", () => {
    const quantity = 4;
    const component = shallow(<Skeleton multiply={quantity} />);
    expect(component).toMatchSnapshot();
    expect(component.find(".skeleton__content")).toHaveLength(quantity);
  });
});
