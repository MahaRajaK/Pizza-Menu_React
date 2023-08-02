import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  // const x = "jonas";
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fonstSize: "50px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      
      {numpizzas>0 ? (
    <React.Fragment>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic,all delicious.</p>

      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
      </ul>
    </React.Fragment>
      ):(
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Salamino"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({pizzaobj}) {
  console.log(pizzaobj);
  
  return (
    <li className={`pizza ${pizzaobj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" :pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  console.log(hour);
  const openhour = 12;
  const closehour = 24;
  const isopen = hour >= openhour && hour <= closehour;
  console.log(isopen);

  // if(!isopen)
  // return (
  //   <footer className="footer">
  //     <p>We're closed</p>
  //   </footer>
  // );

  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehour} openhour={openhour}/>
      ):(
        <p>We're happy to welcome you between {openhour}:00 and {closehour}:00.</p>
      )}
    </footer>
  );
}

function Order({closehour,openhour}){
  return<div className="order">
  <p>
    We're Open from {openhour}:00 until {closehour}:00. Come Visit us before the
    closing time
  </p>
  <button className="btn">Order Now</button>
</div>
}


//React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//React.render(<App />);
