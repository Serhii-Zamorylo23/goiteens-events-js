import React from "react"
import PropTypes from "prop-types"
const Event =({name,start,end,location,speaker})=>{
    return(
        <li>
            <h2>{name}</h2>
            <div>
                <p>{location}</p>
                <p>{speaker}</p>
                <p>{start}</p>
                <p>{end}</p>
            </div>
        </li>
    )
}
export default Event

Event.propTypes={
    name:PropTypes.string.isRequired,
    start:PropTypes.string.isRequired,
    end:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    speaker:PropTypes.string.isRequired
}