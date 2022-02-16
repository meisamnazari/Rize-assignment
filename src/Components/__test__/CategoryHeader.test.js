import React from "react";
import { shallow } from "enzyme";
import CategoryHeader from "../CategoryHeader/CategoryHeader";

let props = {
        title: "Best Actor",
}
let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <CategoryHeader
            title={props.title}
        />
    );
});

it("render without error", () => {
    expect(wrapped.exists()).toBe(true);
});

it("shows a title", () => {
    expect(wrapped.find(".header").text()).toEqual("Best Actor");
});

