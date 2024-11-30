import { Component } from "react";
import car from '../Assets/pngwing.com.png'
import coin from '../Assets/coin.png'

class Car extends Component {

    
    render() {
        return (
            <div>
                <img style={{transform: `translate(${this.props.data.distanceX}px,${this.props.data.distanceY}px) rotate(${this.props.data.rotate}deg)`}} className="car" src={car} alt="car"></img>
                <img className="coin" src={coin}></img>
                <div className="game-info">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'max-content'}}><img className="info-coin" src={coin}></img> <span>{this.props.data.points}</span> +</div>
                    <div className="gas-tank">
                        <div style={{height: `${this.props.data.gas}%`}} className="gas"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Car;