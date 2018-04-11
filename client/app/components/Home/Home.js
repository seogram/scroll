import React, { Component } from "react";
import { scrollSpy } from "./scroll";

class Home extends Component {
  state = {};

  componentDidMount() {
    var menu = document.querySelector(".navbar");
    scrollSpy(menu);
  }
  render() {
    return (
      <div>
        <ul className="navbar">
          <li>
            <a className="active" href="#home" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" title="Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" title="About">
              About
            </a>
          </li>
          <li>
            <a href="#contact" title="Contact">
              Contact
            </a>
          </li>
        </ul>

        <section id="home">
          <div className="container">
            <h2>Home</h2>
          </div>
        </section>

        <section id="portfolio">
          <div className="container">
            <h2>Portfolio</h2>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2>About</h2>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contact</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
