import "./App.css";
import { Component } from "react";
import Header from "./components/header";
import Main from "./components/main";

class App extends Component {
    state = {
        name: "Mohammed Aboalmkarem",
        age: 150,
        city: "away",
        counter: 0
    };
    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    decrease = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
        }
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header increase={this.increase} decrease={this.decrease} counter={this.state.counter}></Header>
                    <Main data={this.state}></Main>
                </header>
            </div>
        );
    }
}

export default App;
