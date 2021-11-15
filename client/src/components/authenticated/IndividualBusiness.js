import React, { useState } from "react";
//import Map from "./Map";
import Timer from "./Timer";
import TimeRemaining from "./TimeRemaining";
import { Button} from 'semantic-ui-react';



function IndividualBusiness({business, lat, long}){
    const{id, name, longitude, latitude, image, address, guess} = business
    
    const [errors, setErrors] = useState(null);
    const [lineItem, setLineItem]=useState(null);
    

    console.log(lat, long)
    const R = 6371e3; // metres
    const φ1 = lat * Math.PI/180; // φ, λ in radians
    const φ2 = latitude * Math.PI/180;
    const Δφ = (latitude-lat) * Math.PI/180;
    const Δλ = (longitude-long) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c// in metres
    const distance = Number(d.toFixed(4))
   
   
    
    console.log(`Distance from Business: ${distance}`)

    function addToLine(){
        fetch("/lines", {
            method: "POST",
            headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                business_id: id,
                distance: distance
            }),
		}).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data);
                    setLineItem(data);
                    
                });
            } else {
                r.json().then((err) => {
                    setErrors(err.errors);
                    console.log(errors);
                });
            }
        });
    }


    return(
        <div className="individualBusiness"> 
            <div className="individualFixedContent">
                <img src={image} alt="Business Logo" className="individualLogo"/>
                <div>
                    <h2>{name}</h2> 
                    <p><h4>Address:</h4>  {address}</p>
                </div>
               {/* <div>
                    <Map />
                </div>*/} 
            </div>
            
            {lineItem ? 
                <>  
                    <div>
                        <Timer lineItem={lineItem}/>
                        <TimeRemaining lineItem={lineItem}/>
                    </div>
                
                </>:
                <>
                    <h4>Approximate Wait Time: {guess/60} minutes</h4>
                    <Button onClick={addToLine}>Get in Line</Button>
                </> }
            
        </div>
    )
}
export default IndividualBusiness;