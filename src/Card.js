import "./Card.css";
import React from "react";
import "./index.css";
import "./App.css";
import "./store.js";
import List from "./List";

function Card() {
  return (
    <div className="List-cards">
      <div className="Card">
        <button type="button">delete</button>
        <h3>First card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Second card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Third card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Fourth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Fifth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Sixth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Seventh card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Eighth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Ninth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Tenth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Eleventh card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Twelfth card</h3>
        <p>lorem ipsum</p>
      </div>
      <div className="Card">
        <button type="button">delete</button>
        <h3>Thirteenth card</h3>
        <p>lorem ipsum</p>
      </div>
      <button type="button" className="List-add-button">
        + Add Random Card
      </button>
    </div>
  );
}

export default Card;
