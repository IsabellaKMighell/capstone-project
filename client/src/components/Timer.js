

function Timer({ business_line, lineItem}){ 
    let timeInterval = lineItem.time * 1000
    
    

    let updateQ = setInterval(handleDestroyPositionOne(), timeInterval)
    
    function handleDestroyPositionOne(){
        let index = 0;
        if(business_line !== [index]){
            let id = business_line[index].id
            fetch(`/lines/${id}`,{
                method: "DELETE"
            })
            index+=1
            
        }else{
            clearInterval(updateQ)
        }

    }
    return(
        <>
        </>
    )
}
export default Timer;