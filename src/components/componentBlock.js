import React from "react";

function ComponentBlock(props) {
  return (
    <div className="componentContainer">
      <p className="componentText">{props.number}, Loss</p>
      <style jsx>{`
        div.componentContainer {
          display: flex;
          flex: 1;
          min-width: 10em;
          min-height: 3em;
          border: 3px solid #444;
          alignt-items: center;
          justify-content: center;
          margin: 0.5em;
        }
        p.componentText {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
}

export default ComponentBlock;
