import { useState } from "react";
const DateTime = () => {
    setInterval(updateTime, 1000);

    const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
    const [currentDate, setDate] = useState(new Date().toLocaleDateString());


    function updateTime() {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toLocaleDateString());

    }

    return (

        <div>
            <p>{currentDate}</p>
            <p>{currentTime}</p>
        </div>

    );
}

export default DateTime;