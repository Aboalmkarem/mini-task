import "./App.css";
import { Component } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Car from "./components/car";

class App extends Component {
    state = {
        name: "Mohammed Aboalmkarem",
        age: 150,
        city: "away",
        counter: 0,
        distanceX: 0,
        distanceY: 0,
        rotate: 0,
        gas: 100,
        points: 0,
        show: '',
    };
    increase = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    decrease = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
        }
    };
    controler = (event) => {
        if (this.state.gas >= 1) {
            if (event.keyCode === 87) {
                console.log("go forward");
                this.setState({
                    rotate: 0,
                    distanceY: this.state.distanceY - 5,
                    gas: this.state.gas - 1,
                });
            } else if (event.keyCode === 83) {
                console.log("go back");
                this.setState({
                    rotate: 180,
                    distanceY: this.state.distanceY + 5,
                    gas: this.state.gas - 1,
                });
            } else if (event.keyCode === 68) {
                console.log("go right");
                this.setState({
                    rotate: 90,
                    distanceX: this.state.distanceX + 5,
                    gas: this.state.gas - 1,
                });
            } else if (event.keyCode === 65) {
                console.log("go left");
                this.setState({
                    rotate: -90,
                    distanceX: this.state.distanceX - 5,
                    gas: this.state.gas - 1,
                });
            }
        }
        // console.log(event.keyCode)
    };
    render() {
        return (
            <div className="App" onKeyDown={this.controler} tabIndex={0}>
                <header className="App-header">
                    {this.state.show === "task" ? (
                        <>
                            <Header
                                increase={this.increase}
                                decrease={this.decrease}
                                counter={this.state.counter}
                            ></Header>
                            <Main data={this.state}></Main>
                        </>
                    ) : this.state.show === "game" ? (
                        <Car data={this.state}></Car>
                    ) : (
                        <>
                            <h1>Choose One</h1>
                            <div>
                                <button onClick={() => {this.setState({show: 'task'})}}>TASK</button>
                                <button onClick={() => {this.setState({show: 'game'})}}>GAME</button>
                            </div>
                        </>
                    )}
                </header>
            </div>
        );
    }
}

export default App;
