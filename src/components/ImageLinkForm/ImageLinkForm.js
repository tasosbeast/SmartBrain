import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="text-2xl text-white mb-3">
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="flex justify-center">
        <div className="form flex justify-center p-4 rounded-lg shadow-lg">
          <input
            className="text-xl p-2 w-3/4 text-center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="text-white font-bold py-2 px-3 bg-blue-600 hover:bg-blue-400 border-none rounded-sm hover:shadow-inner w-1/4 grow"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
