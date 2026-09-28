import { useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const menu = [
    {
      id: 1,
      name: "Cappuccino",
      category: "Coffee",
      price: 160,
      description: "Rich espresso with steamed milk and soft foam.",
      emoji: "☕",
    },
    {
      id: 2,
      name: "Caramel Latte",
      category: "Coffee",
      price: 190,
      description: "Smooth latte blended with caramel sweetness.",
      emoji: "🥤",
    },
    {
      id: 3,
      name: "Cold Brew",
      category: "Coffee",
      price: 180,
      description: "Slow brewed coffee served chilled and refreshing.",
      emoji: "🧊",
    },
    {
      id: 4,
      name: "Blueberry Pancakes",
      category: "Breakfast",
      price: 240,
      description: "Fluffy pancakes topped with blueberries and syrup.",
      emoji: "🥞",
    },
    {
      id: 5,
      name: "Avocado Toast",
      category: "Breakfast",
      price: 220,
      description: "Toasted sourdough with creamy avocado and herbs.",
      emoji: "🥑",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      category: "Desserts",
      price: 210,
      description: "Moist chocolate cake with rich chocolate cream.",
      emoji: "🍰",
    },
    {
      id: 7,
      name: "Tiramisu",
      category: "Desserts",
      price: 230,
      description: "Classic Italian dessert with coffee and mascarpone.",
      emoji: "🍮",
    },
    {
      id: 8,
      name: "Berry Cheesecake",
      category: "Desserts",
      price: 250,
      description: "Creamy cheesecake finished with fresh berries.",
      emoji: "🍓",
    },
  ];

  const categories = ["All", "Coffee", "Breakfast", "Desserts"];

  const filteredMenu =
    category === "All"
      ? menu
      : menu.filter((item) => item.category === category);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cafe">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="brand">
          <span className="brand-icon">☕</span>

          <div>
            <h2>Brew & Bloom</h2>
            <span>CAFÉ</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="cart-button">
          🛒
          <span>{cart.length}</span>
        </div>

      </nav>

      {/* HERO */}

      <section className="hero" id="home">

        <div className="hero-content">

          <span className="hero-tag">
            FRESHLY BREWED • LOCALLY LOVED
          </span>

          <h1>
            Your daily cup of
            <span> happiness.</span>
          </h1>

          <p>
            Fresh coffee, delicious food and cozy moments.
            Welcome to Brew & Bloom Café.
          </p>

          <div className="hero-buttons">

            <a href="#menu" className="primary-button">
              Explore Menu
            </a>

            <a href="#about" className="secondary-button">
              Our Story →
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>4.9</strong>
              <span>★ Google Rating</span>
            </div>

            <div>
              <strong>12K+</strong>
              <span>Happy Customers</span>
            </div>

            <div>
              <strong>8 AM</strong>
              <span>Open Daily</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="coffee-circle">
            ☕
          </div>

          <div className="floating-card">
            <span>Today's Special</span>
            <strong>Caramel Latte</strong>
            <small>Only ₹190</small>
          </div>

        </div>

      </section>

      {/* MENU */}

      <section className="menu-section" id="menu">

        <div className="section-title">

          <span>OUR MENU</span>

          <h2>Made with love.</h2>

          <p>
            Simple ingredients, carefully prepared and served fresh.
          </p>

        </div>

        <div className="categories">

          {categories.map((item) => (

            <button
              key={item}
              className={category === item ? "category active" : "category"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

        <div className="menu-grid">

          {filteredMenu.map((item) => (

            <div className="menu-card" key={item.id}>

              <div className="food-image">
                {item.emoji}
              </div>

              <div className="menu-card-content">

                <div className="food-heading">

                  <h3>{item.name}</h3>

                  <strong>
                    ₹{item.price}
                  </strong>

                </div>

                <p>
                  {item.description}
                </p>

                <button
                  className="add-button"
                  onClick={() => addToCart(item)}
                >
                  + Add to order
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ORDER CART */}

      {cart.length > 0 && (

        <section className="order-section">

          <div>

            <span>YOUR ORDER</span>

            <h2>
              {cart.length} item{cart.length > 1 ? "s" : ""}
            </h2>

          </div>

          <div className="order-items">

            {cart.map((item, index) => (

              <div className="order-item" key={index}>

                <span>
                  {item.emoji} {item.name}
                </span>

                <strong>
                  ₹{item.price}
                </strong>

                <button
                  onClick={() => removeFromCart(index)}
                >
                  ×
                </button>

              </div>

            ))}

          </div>

          <div className="order-total">

            <span>Total</span>

            <strong>₹{total}</strong>

          </div>

          <button
            className="checkout-button"
            onClick={() => alert("Thank you! Your order has been placed.")}
          >
            Place Order →
          </button>

        </section>

      )}

      {/* ABOUT */}

      <section className="about" id="about">

        <div className="about-image">
          <div>
            ☕
          </div>
        </div>

        <div className="about-content">

          <span>OUR STORY</span>

          <h2>
            A little café,
            <br />
            a lot of warmth.
          </h2>

          <p>
            Brew & Bloom started with a simple idea:
            create a cozy place where people can enjoy
            great coffee and meaningful conversations.
          </p>

          <p>
            From carefully selected coffee beans to freshly
            prepared food, everything we serve is made with
            attention and passion.
          </p>

          <button className="primary-button">
            Discover Our Story
          </button>

        </div>

      </section>

      {/* HOURS */}

      <section className="hours" id="contact">

        <div>

          <span>VISIT US</span>

          <h2>Come say hello.</h2>

          <p>
            24 Coffee Street, Chennai
          </p>

        </div>

        <div className="hours-card">

          <h3>Opening Hours</h3>

          <div>
            <span>Monday - Friday</span>
            <strong>8:00 AM - 10:00 PM</strong>
          </div>

          <div>
            <span>Saturday - Sunday</span>
            <strong>9:00 AM - 11:00 PM</strong>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="brand">

          <span className="brand-icon">
            ☕
          </span>

          <div>
            <h2>Brew & Bloom</h2>
            <span>CAFÉ</span>
          </div>

        </div>

        <p>
          Fresh coffee. Good food. Great moments.
        </p>

        <p>
          © 2026 Brew & Bloom Café
        </p>

      </footer>

    </div>
  );
}

export default App;