import React, { useState } from "react";
function IndividualBusiness({business, lat, long, user}){
    const{id, name, longitude, latitude, image, address} = business
    const [errors, setErrors] = useState(null);

    const R = 6371e3; // metres
    const φ1 = lat * Math.PI/180; // φ, λ in radians
    const φ2 = latitude * Math.PI/180;
    const Δφ = (latitude-lat) * Math.PI/180;
    const Δλ = (longitude-long) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres
    
    console.log(`Distance from Business: ${d}`)

    function addToLine(){
        fetch("/lines", {
            method: "POST",
            headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				business_id: {id},
				distance: {d}
			}),
		}).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data);
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
        <div>
            <img src={image} alt="Business Logo" className="logo"/>
            <h3>{name}</h3> 
            <h4>{address}</h4>
            <button onClick={addToLine}>Add to Line</button>
        </div>
    )
}
export default IndividualBusiness;