import { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <h2>
                    my name is{" "}
                    <span
                        style={{
                            color: `${
                                this.props.data.counter === 1
                                    ? "red"
                                    : this.props.data.counter > 1
                                    ? "green"
                                    : "yellow"
                            }`,
                        }}
                    >
                        {this.props.data.name}
                    </span>
                </h2>
                <h2>
                    my age is{" "}
                    <span
                        style={{
                            color: `${
                                this.props.data.counter === 3
                                    ? "red"
                                    : this.props.data.counter > 3
                                    ? "green"
                                    : "yellow"
                            }`,
                        }}
                    >
                        {this.props.data.age}
                    </span>
                </h2>
                <h2>
                    my city is{" "}
                    <span
                        style={{
                            color: `${
                                this.props.data.counter === 6
                                    ? "red"
                                    : this.props.data.counter > 6
                                    ? "green"
                                    : "yellow"
                            }`,
                        }}
                    >
                        {this.props.data.city}
                    </span>
                </h2>
            </div>
        );
    }
}

export default Main;
