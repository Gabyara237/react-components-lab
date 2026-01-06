
const WeatherForecast = ({weatherForecasts}) =>{

    return(
        <>
            {weatherForecasts.map((weatherForecast, index)=>(
            <div className="weather" key={index} >
                <h2> {weatherForecast.day}</h2>
                <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
                <p><span>Conditions: </span> {weatherForecast.conditions} </p>
                <p><span>Time: </span>{weatherForecast.time}</p>
            </div>
            ))}
        </>
    )
}   

export default WeatherForecast