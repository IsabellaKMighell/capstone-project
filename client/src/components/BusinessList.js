import Business from './Business';



function BusinessList({businesses}) {

    let businessList= businesses.map((business)=>{
        return(
            <Business 
            key={business.id}
            id={business.id}
            name={business.name}
            latitude={business.latitude}
            longitude={business.longitude}
            />
        )
    })

    return (
        <div className="listsDiv">
            {businessList}
        </div>
    );
}

export default BusinessList;