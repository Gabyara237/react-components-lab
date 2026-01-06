const WeatherData = ({day, conditions,time, children}) =>{

    return(
        <>
            <h2> {day}</h2>
            {children}
            <p><span>Conditions: </span> {conditions} </p>
            <p><span>Time: </span>{time}</p>

        </>
    )

}

export default WeatherData