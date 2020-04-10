import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card.test.js"

it("renders the UI as expected", () => {
  const tree = renderer
    .create(<Card} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("delete button deletes that one card only", () => {
  const tree = renderer
    .create(<Card} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
