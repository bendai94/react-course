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
        <Menu />
        <Footer />
    </div>;
}

// single {} to go into JS, double {{}} to define an object
//  style = {{color: 'red'}}
// CSS names have beenconverted to camel case, font-size becomes fontSize
// moved style out to a variable when it got too long
function Header() {
    const style = {color: 'red', fontSize: '48px', textTransform: 'uppercase'};
    return <h1 style={style}>Fast React Pizza Co,</h1>;
}

function Menu () {
    return (
        <div>
            <h2>Our menu</h2>
            <Pizza />
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
    )
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