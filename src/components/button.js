import React from "react";

function Button(props) {
  return (
    <div onClick={props.onClick}>
      <div className="buttonContainer">
        <p className="buttonText">Create Component</p>
      </div>
      <style jsx>{`
        div.buttonContainer {
          display: flex;
          flex: 1;
          min-width: 10em;
          min-height: 3em;
          background: #444;
          alignt-items: center;
          justify-content: center;
          margin: 0.5em;
          cursor: pointer;
        }
        div.buttonContainer:hover {
          opacity: 0.5;
        }
        p.buttonText {
          font-size: 1em;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default Button;
