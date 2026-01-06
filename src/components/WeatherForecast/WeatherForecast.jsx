import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import WeatherData from '../WeatherData/WeatherData'

const WeatherForecast = ({weatherForecasts}) =>{

    return(
        <>
            {weatherForecasts.map((weatherForecast, index)=>(
            <div className="weather" key={index} >
                <WeatherData 
                    day={weatherForecast.day}
                    conditions={weatherForecast.conditions}
                    time = {weatherForecast.time}>
                    <WeatherIcon img={weatherForecast.img} imgAlt={weatherForecast.imgAlt}/>       
                </WeatherData>
            </div>
            ))}
        </>
    )
}   

export default WeatherForecast