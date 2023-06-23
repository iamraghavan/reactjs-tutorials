import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { CiCircleMinus ,CiCirclePlus } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";

const Hook = () => {
  const [count, setCount] = useState(0);

  // Not Suggested Method to pass the object to useState().
  // const [objName, objSetName] = useState({ count: 0, text: "Like" });

  //   let someName = () => {
  //     console.log("Hello Pradeep Raghavan !");
  //   };

  const [name, setName] = useState("CEO");

  let changeText = () => {
    const inisal = ["FullStack Developer", "Founder", "Developer"];
    const randomNum = Math.floor(Math.random() * 3);
    setName(inisal[randomNum]);
  };

  let incrementValue = () => {
    setCount(count + 1);
  };

  let decrementValue = () => {
    setCount(count - 1);
  };

  return (
    <div className="mx-5">
      <h5 className="border border-success text-center pt-2 pb-2 contentPara">
        Use State / Hook Concept
      </h5>

      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-lg-6 contentParaColumn text-center my-4">
            <p>
              Example : Increment / Decrement the Constant Value using React
              Hook Concept
            </p>

            <Button variant="outline-success" onClick={incrementValue}>
              <CiCirclePlus size={30}/>
            </Button>

            <span className="mt-4 mx-4">{count}</span>

            <Button variant="outline-danger" onClick={decrementValue}>
              <CiCircleMinus size={30}/>
            </Button>
          </div>
          <div className="col-lg-6 contentParaColumn text-center my-4">
            <p>
              Task : To change the Text content Value using React Hook Concept.
            </p>
            <div className="border border-danger py-3">
              <h4>Pradeep Raghavan : {name}</h4>
              <Button variant="outline-danger" onClick={changeText}>
                Change the Value <TfiReload/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hook;
