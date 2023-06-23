import React from "react";

const Props = ({ length }) => {
  return (
    <div className="mx-5">
      <h5 className="border border-success text-center pt-2 pb-2 contentParaProps">
        React Props / To pass dynamic Values
      </h5>

      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="pt-2 pb-2 text-center contentParaProps text-info">
              No of todo items is :
              <span className="text-danger"> {length} </span> Task / Works
            </h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

Props.defaultProps = {
  title: "No Value",
};
export default Props;
