import { Component } from "react";
import car from '../Assets/pngwing.com.png'

class Car extends Component {

    
    render() {
        return (
            <div>
                <img style={{transform: `translate(${this.props.data.distanceX}px,${this.props.data.distanceY}px) rotate(${this.props.data.rotate}deg)`}} className="car" src={car} alt="car"></img>
                <div className="gas-tank">
                    <div style={{height: `${this.props.data.gas}%`}} className="gas"></div>
                </div>
            </div>
        )
    }
}
export default Car;