import { Map, GoogleApiWrapper } from 'google-maps-react';
function MapContainer({longitude, latitude}){
    const mapStyles = {
        width: '25%',
        height: '25%',
      };
    return(
        <Map>
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: {latitude}, lng: {longitude}}}
        </Map>
    )

}
               
               
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAl8W0S5hqfCrmBm0x4-oi_JJnA6ORsRmA'
    })(MapContainer);