import React from "react";

export default function JournalEntry(props) {

    return (
        <div className="journal-entry">
            <div>
                <img src={props.data.imageUrl} className="journal-img"/>
            </div>
            <div>
                <p className="journal-location">{props.data.location}</p>
                <a className="journal-link" href={props.data.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.data.title}</h2>
                <p>{props.data.startDate} - {props.data.endDate}</p>
                <p>{props.data.description}</p>
            </div>
            
        </div>
    )
}