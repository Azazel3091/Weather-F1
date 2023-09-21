import React from "react";

class Formfive extends React.Component {
    render() {
        return(
            <div>
            <form onSubmit={this.props.weatherMethodFive}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Прогноз погоды на пять дней</button>
            </form>
            </div>
        );
    }
}

export default Formfive