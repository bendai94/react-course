import React from "react";
import ReactDOM from 'react-dom/client'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

// each function can only return one object, so we wrapped the h1 and pizza in a div
function App() {
    return <div>
        <Header />
        <Pizza />
        <Footer />
    </div>;
}

function Header() {
    return <h1>Fast React Pizza Co,</h1>;
}

function Menu () {

}

// alternative way of writing, can use => for function definition
// and or React.createElement()
const Footer = () => {
    return React.createElement('footer', null, "We're currently open!");
}

// never nest component declarations but always declare all your components in the top level
function Pizza() {
    return <div>
        <img src='pizzas/spinaci.jpg' alt="Pizza spinaci" />
        <h2>Pizza Spinachi</h2>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"));