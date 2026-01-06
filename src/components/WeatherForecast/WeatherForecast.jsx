import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

const WeatherForecast = ({weatherForecasts}) =>{

    return(
        <>
            {weatherForecasts.map((weatherForecast, index)=>(
            <div className="weather" key={index} >
                <h2> {weatherForecast.day}</h2>
                <WeatherIcon img={weatherForecast.img} imgAlt={weatherForecast.imgAlt} />
                <p><span>Conditions: </span> {weatherForecast.conditions} </p>
                <p><span>Time: </span>{weatherForecast.time}</p>
            </div>
            ))}
        </>
    )
}   

export default WeatherForecast