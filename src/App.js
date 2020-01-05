import React from "react";
import Button from "./components/button";
import ComponentBlock from "./components/componentBlock";

function Page({ children }) {
  return (
    <div className="main">
      <div className="header">
        <p align="center">(Mini Project) Functionally Create Components</p>
      </div>
      <div className="body">{children}</div>
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [{ number: 10 }, { number: 23 }] };
  }

  addBlock = () => {
    this.setState(currentState => {
      currentState.blocks.push({
        number: Math.floor(Math.random() * 100)
      });
      return currentState;
    });
  };

  render() {
    let components = [];
    for (let block of this.state.blocks) {
      components.push(<ComponentBlock number={block.number} />);
    }

    return (
      <Page>
        <Button onClick={this.addBlock} />
        {components}
      </Page>
    );
  }
}

export default App;
