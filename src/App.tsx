import React from 'react';
import './App.css';
import { Detail01, Detail02, Detail03 } from './component/index'

const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Banana",
    value: "Banana",
  },
  {
    label: "Mango",
    value: "Mango",
  },
];

class App extends React.Component <any,any>{

  constructor(props:any) {
    super(props);
    this.state = {
      fruit: "Apple",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e:any) => {
    this.setState({ fruit: e.target.value });
  }
  render() {
    const { fruit } = this.state;
    return (
      <div id="App">
        <div className="select-container">
          <select onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
            {
              (() => {
                if ( fruit === "Apple") {
                  return <Detail01 />;
                } else if(fruit === "Banana"){
                  return <Detail02 />;
                }else if (fruit === "Mango"){
                  return <Detail03 />;
                }
                console.log("fruit : " + JSON.stringify(fruit));
            })()
           }
        </div>
      </div>
    );
  }
}

export default App;