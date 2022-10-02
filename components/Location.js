
import React from 'react'


function location(props){
    return(
        <div className="container--location">
            <img src={props.imageUrl} className= "location--image"/>
            <div className="text">
            <div className="Country">{props.location}</div>
            <div className="googleMap">{props.googleMapsUrl}</div>
            <div className="City--title">{props.title}</div>
            <div className="date">{props.startDate} {props.endDate}</div>
            <div className="description">{props.description}</div>
            </div>
        </div>
    )
}



export default location;
