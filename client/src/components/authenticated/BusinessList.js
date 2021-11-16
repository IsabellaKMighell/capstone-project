import Business from './Business';



function BusinessList({businesses, handleIndividualBusiness, search}) {
    let filteredBusinesses = businesses.filter((business)=>{
        return business.name.toLowerCase().includes(search.toLowerCase())
    })

    let businessList= filteredBusinesses.map((business)=>{
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