import Business from './Business';



function BusinessList({businesses, handleIndividualBusiness}) {

    let businessList= businesses.map((business)=>{
        return(
            <Business 
            key={business.id}
            id={business.id}
            name={business.name}
            latitude={business.latitude}
            longitude={business.longitude}
            address={business.address}
            logo={business.image}
            handleIndividualBusiness={handleIndividualBusiness}
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