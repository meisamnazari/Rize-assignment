import React from "react";
import { shallow } from "enzyme";
import NomineeCard from "../NomineeCard/NomineeCard";

let props = {
    mockNomineeItem: {
        title: "Mank",
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
    },
    selected:false
}
let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <NomineeCard
            nomineeItem={props.mockNomineeItem}
            selected={props.selected}
        />
    );
});

it("render without error", () => {
    expect(wrapped.exists()).toBe(true);
});

it("shows a title", () => {
    expect(wrapped.find(".title").text()).toEqual("Mank");
});

it("shows an image", () => {
    expect(wrapped.find("img").length).toEqual(1);
});

it("shows a button", () => {
    expect(wrapped.find('.button').length).toEqual(1);
});

it("does not show the button as the card is not selected", () => {
    expect(wrapped.find(".selectedText").length).toEqual(0);
});
