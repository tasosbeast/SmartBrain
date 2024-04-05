import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 white">
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="washed-blue b pv2 ph3 bg-blue hover-bg-light-blue bn br2 hover-shadow-inner w-30 grow">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
