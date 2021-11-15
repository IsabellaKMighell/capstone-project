import {useState, useEffect} from "react"
function TimeRemaining({lineItem}){
    const{time, wait}=lineItem
    const [seconds, setSeconds]=useState(wait) 
    const [timeLeft, setTimeLeft] = useState('');
    const [position, setPosition] = useState('');
    
    
    useEffect(() => {
        let interval = null;
        if (seconds>0) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            setTimeLeft(displayClock(seconds))
            setPosition(getPosition(seconds, time))
          }, 1000);
        } else if (seconds === 0) {
          clearInterval(interval);
        }
      return () => clearInterval(interval);
    }, [seconds, time]);

    const displayClock = seconds => {
        let minutesLeft = Math.floor(seconds/60) ;
        let secondsLeft = seconds % 60;
        minutesLeft = minutesLeft.toString().length === 1 ? "0" + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
        return `${minutesLeft} minutes ${secondsLeft} seconds`;
    }
    
    const getPosition= (seconds, time)=>{
      const remainder = seconds%time
      if(remainder === 0){
        const currentPosition = seconds / time
        return `${currentPosition}`
      }else{
        const currentPosition = ((seconds - remainder) / time) + 1
        return `${currentPosition}`
      }
      
    }
        
    return (
        <div >
            <h3>Current Wait Time: <span>{timeLeft}</span></h3>
            <h3>Position: <span>{position}</span></h3>
        </div>
    )
}

export default TimeRemaining;