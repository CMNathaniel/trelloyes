import "./List.css";
import Card from "./Card.js";
import "./Card.css";
import React from "react";
import "./index.css";
import "./App.css";
import "./store.js";

function List() {
  return (
    <div className="App-list">
      <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
        <div className="Card">
          <Card></Card>
        </div>
      </section>
      <section className="List">
        <header className="List-header">
          <h2>Second list</h2>
        </header>
        <div className="Card">
          <Card></Card>
        </div>
      </section>
      <section className="List">
        <header className="List-header">
          <h2>Third list</h2>
        </header>
        <div className="Card">
          <Card></Card>
        </div>
      </section>
      <section className="List">
        <header className="List-header">
          <h2>Fourth list</h2>
        </header>
        <div className="Card">
          <Card></Card>
        </div>
      </section>
    </div>
  );
}

export default List;
