import React from "react";
import Info from "./info";
import Formfive from "./formfive";
import WeatherFive from "./weatherfive";

const API_KEY = "d890b5be008be7f4f2b99ec9c1f84a5e";

class Five extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        error: undefined
    }

gettingWeatherFiveDay = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;

        if(city){
            const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
            //fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`);
            const data = await api_url.json();
            console.log(data)

            this.setState({
                time: data.list[0].dt_txt,
                temp: data.list[0].main.temp,
                time2: data.list[8].dt_txt,
                temp2: data.list[8].main.temp,
                time3: data.list[16].dt_txt,
                temp3: data.list[16].main.temp,
                time4: data.list[24].dt_txt,
                temp4: data.list[24].main.temp,
                time5: data.list[32].dt_txt,
                temp5: data.list[32].main.temp,
                city: data.city.name,
                error: undefined
            });
        }
       else {
           this.setState({
               //time: undefined,
               temp: undefined,
               city: undefined,
               error: "Введите название города"
           });
       }
    }



    render(){
        return(
            <div>
                <Info />
                <Formfive
                    weatherMethodFive={this.gettingWeatherFiveDay}
                />
                <WeatherFive
                    time={this.state.time}
                    temp={this.state.temp}
                    time2={this.state.time2}
                    temp2={this.state.temp2}
                    time3={this.state.time3}
                    temp3={this.state.temp3}
                    time4={this.state.time4}
                    temp4={this.state.temp4}
                    time5={this.state.time5}
                    temp5={this.state.temp5}
                    city={this.state.city}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default Five;