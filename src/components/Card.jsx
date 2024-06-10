import React from "react"
import SpringNewZealand from "../assets/Spring-new-zealand.png"
import LocationPin from "../assets/location-pin.png"

function Card(props) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={props.item.imageUrl} className="card-image"></img>
                {/* <img src={SpringNewZealand} className="card-image"></img> */}
            </div>
            <div className="card-info">
                <div className="card-location-container">
                    <div className="card-location-country">
                        <img src={LocationPin} className="location-pin" alt="Location pin"></img>
                        <p className="card-location">{props.item.location}</p>
                    </div>
                    {/* <a href={props.item.googleMapsUrl}>View on Google Maps</a> */}
                </div>

                <h2 className="card-title">{props.item.title}</h2>
                {/* <h4>{props.item.startDate} - {props.item.endDate}</h4> */}
                <p className="card-description">{props.item.description}</p>

            </div>
        </div>
    )
}

export default Card
