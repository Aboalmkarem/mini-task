import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header style={{ padding: "2rem" }}>
                <h1
                    style={{
                        color: `${this.props.counter === 5 ? "red" : this.props.counter > 5 ? "green" : "yellow"}`,
                    }}
                >
                    {this.props.counter}
                </h1>
                <button onClick={this.props.increase}>increase</button>
                <button onClick={this.props.decrease}>decrease</button>
            </header>
        );
    }
}

export default Header;
