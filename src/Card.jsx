import React from "react"
import SpringNewZealand from "./assets/Spring-new-zealand.png"

function Card(props) {
    return (
        <div className="card">
            <div className="card-image-container">
                {/* <img src={props.item.imageUrl}></img> */}
                <img src={SpringNewZealand} className="card-image"></img>
            </div>
            <div className="card-info">
                <div className="location">
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h2>{props.item.title}</h2>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>

            </div>
        </div>
    )
}

export default Card
