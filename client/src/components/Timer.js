import{ useState} from "react"

function Timer({ business_line, lineItem}){ 
    let timeInterval = lineItem.time * 1000
    const [index, setIndex]= useState(0)
    

    let updateQ = setTimeout(function(){
        handleDestroyPositionOne(index) 
        setIndex(index => index+1)}, timeInterval)
    
    function handleDestroyPositionOne(){
        let id = business_line[index].id
        if(business_line.length>0){
            fetch(`/lines/${id}`,{
                method: "DELETE"
            })
            console.log(index)
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