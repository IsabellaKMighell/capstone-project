import{ useState} from "react"

function Timer({ lineItem}){ 
    const{line, line_length}= lineItem
    console.log(line)
    let timeInterval = lineItem.time * 1000
   
    const [index, setIndex]= useState(0)
    

    let updateQ = setTimeout(function(){
        handleDestroyPositionOne(index) 
        setIndex(index => index+1)
    }, timeInterval)
    
    function handleDestroyPositionOne(){
       
        
        if(index < line_length){
            let id = line[index].id
            fetch(`/lines/${id}`,{
                method: "DELETE"
            })
            console.log(id)
        }else{
            clearTimeout(updateQ)
        }
        
    }
    return(
        <>
        </>
    )
}
export default Timer;