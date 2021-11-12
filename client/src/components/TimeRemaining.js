import {useState} from "react"
function TimeRemaining({waittime}){
    const [counter, setCounter]=useState(0)  
    setCounter(waittime)
    
    
    let timer = setInterval( countdown(), 1000);
    
    function countdown() {
        
        if (counter>0){
            setCounter( counter - 1);
        }
            clearInterval(timer)
    }
    return (
        <div>
            <h3>Wait time remaining: {counter}</h3>
        </div>
    )
}

export default TimeRemaining;