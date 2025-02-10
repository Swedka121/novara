import Block from "@/components/Block";
import React from "react";
import ScrollEvent from "@/components/scrollEvent";

export default function page() {
  return (
    <>
      <ScrollEvent></ScrollEvent>
      <Block name="Home">
        <section className="home">
          <div className="aside1">
            <h1 className="title">INVEST IN THE FUTURE</h1>
            <p className="secText">
              Novara isn’t just a meme coin – it’s a movement.
              <br /> Combining the fun spirit of internet culture with the{" "}
              <br />
              innovation of blockchain technology, we’re here to <br /> redefine
              how communities engage with cryptocurrency.
            </p>
            <div className="buttons">
              <button className="button1">Explore</button>
              <button className="button2">
                Move to <img src="/images/arrow1.svg"></img>
              </button>
            </div>
          </div>
        </section>
      </Block>
      <Block name="News">
        <section className="news"></section>
      </Block>
    </>
  );
}
