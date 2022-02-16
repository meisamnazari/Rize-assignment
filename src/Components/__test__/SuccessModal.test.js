import React from "react";
import { shallow } from "enzyme";
import SuccessModal from "../SuccessModal/SuccessModal";

let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <SuccessModal />
    );
});

it("render without error", () => {
    expect(wrapped.exists()).toBe(true);
});

it("shows a close button", () => {
    expect(wrapped.find(".closeButton").length).toEqual(1);
});

it("shows the succes text", () => {
    expect(wrapped.find(".modalText").text()).toEqual('Submit Successfuly Done!');
});
