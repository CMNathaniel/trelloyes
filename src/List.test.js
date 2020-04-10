import React from "react";
import renderer from "react-test-renderer";
import List from "./List.js";

it("renders the UI as expected", () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("add random card button adds a random card to that list only", () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});
