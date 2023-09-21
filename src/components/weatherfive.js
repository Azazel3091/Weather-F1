import React from "react";

class WeatherFive extends React.Component {
    render() {
        return(
            <div>
            {this.props.city &&
            <div>
                <p>Местоположение: {this.props.city}</p>
                <p>Температура {this.props.time} будет составлять: {this.props.temp}°C</p>
                <p>Температура {this.props.time2} будет составлять: {this.props.temp2}°C</p>
                <p>Температура {this.props.time3} будет составлять: {this.props.temp3}°C</p>
                <p>Температура {this.props.time4} будет составлять: {this.props.temp4}°C</p>
                <p>Температура {this.props.time5} будет составлять: {this.props.temp5}°C</p>
            </div>
            }
            <p>{this.props.error}</p>
            </div>
        );
    }
}

export default WeatherFive