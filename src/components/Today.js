import React from "react";
import Info from "./info";
import Form from "./form";
import Weather from "./Weather";

const API_KEY = "d890b5be008be7f4f2b99ec9c1f84a5e";

class Today extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;

        if(city){
            const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data)

            var sunrise = data.sys.sunrise;
            var datesr = new Date((sunrise + data.timezone)*1000);
            datesr = datesr.getUTCHours() + ":" + datesr.getMinutes() + ":" + datesr.getSeconds();

            var sunset = data.sys.sunset /* + data.timezone */ ;
            var datess = new Date((sunset + + data.timezone)*1000);
            datess = datess.getUTCHours() + ":" + datess.getMinutes() + ":" + datess.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: datesr,
                sunset: datess,
                error: undefined
            });
        }
        else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
    }

    render(){
        return(
            <div>
                <Info />
                <Form
                    weatherMethod={this.gettingWeather}
                />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default Today;
