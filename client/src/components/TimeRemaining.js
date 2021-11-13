import {useState, useEffect} from "react"
function TimeRemaining({waittime}){
    const [seconds, setSeconds]=useState(waittime) 
    
    useEffect(() => {
        let interval = null;
        if (seconds>0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [seconds]);
    
        
    return (
        <div>
            <h3>Wait time remaining: {seconds} seconds</h3>
        </div>
    )
}

export default TimeRemaining;
