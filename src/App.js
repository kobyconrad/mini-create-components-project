import React from "react";
import ComponentBlock from "./components/componentBlock";
import Button from "./components/button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [] };
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <p align="center">(Mini Project) Functionally Create Components</p>
        </div>
        <div className="body">
          <Button onClick={console.log("Hello World :)")} />
          {this.state.blocks}
        </div>
        <style jsx>{`
          div.header {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            background: #f1f1f1;
            margin-bottom: 1em;
          }
          div.main {
            display: flex;
            flex: 1;
            flex-direction: column;
          }
          div.body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
  updateblocks(blocks) {
    this.setState({ blocks: blocks });
  }
}

export default App;
