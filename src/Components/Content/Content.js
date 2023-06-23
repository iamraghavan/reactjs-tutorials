import React from "react";
import "./Content.css";
import { Button } from "react-bootstrap";

const Content = () => {
  function nameChange() {
    const inisal = ["CEO", "Founder", "Developer"];
    const randomNum = Math.floor(Math.random() * 3);
    return inisal[randomNum];
  }



  // to pass the event to the function
  const handleEvents = (e, name) => {
    console.log(e.target.innerText, { name });
  };

  // Double Click Events in React JS

  const handleDoubleClick = (subscriberName) => {
    console.log("Thanks For Subscribe Our Website");
  };

  // to click the button change the dynamic content without loading the website

  return (
    <section>
      <h1 className="contentHeading">Pradeep Raghavan is : {nameChange()}</h1>
      <p
        onDoubleClick={() => handleDoubleClick()}
        className="contentPara"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Button
        variant="success"
        className="btnclickEvent"
        onClick={(e) => handleEvents(e, "Raghavan")}
      >
        Subscribe our website
      </Button>
    </section>
  );
};

export default Content;
