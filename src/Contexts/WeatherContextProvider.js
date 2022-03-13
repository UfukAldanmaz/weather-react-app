const WeatherContextProvider = (props) => {
    const [title, setTitle] = useState("Hello World")

    return (
        <WeatherContext.Provider value={title}>
            {props.children}
        </WeatherContext.Provider>
    )
}