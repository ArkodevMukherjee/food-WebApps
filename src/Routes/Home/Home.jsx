import { useEffect , useRef } from "react";
import Typed from "typed.js";
import Card from "../../Card";
import "./styles/Home.css";
import burgerImage from "../../assets/burger-image.avif";
import pizzaImage from "../../assets/pizza-image.avif";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Best Food in the market', '&amp; Best Shops'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <div className="header">
        <h1 ref={el}>Best Food Website In The Market</h1>
      </div>

      <div className="section">
        <p className="h">Explore The Menu of the website</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          commodi aliquid blanditiis ad voluptatibus at minus? Alias, pariatur.
          Ducimus asperiores voluptates necessitatibus veniam maiores adipisci
          nulla placeat impedit officiis aspernatur!
        </p>

        <div className="food-items" id="menu">
          <img
            src={burgerImage}
            alt=""
            width="100px"
            height="100px"
            className="foodMenu"
          />
          <img
            src={pizzaImage}
            alt=""
            width="100px"
            height="100px"
            className="foodMenu"
          />
        </div>
      </div>
      <hr />

      <div className="section">
        <p className="hd">Top dishes near your home</p>
        <div className="menu-food-items-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
