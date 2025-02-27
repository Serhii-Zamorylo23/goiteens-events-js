import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
const ItemStyle=styled.li`
    width: 300px;
    background: #f8dd86d8;
    border: 3px solid y;
`
const Event =({name,start,end,location,speaker})=>{
    return(
        <ItemStyle>
            <h2>{name}</h2>
            <div>
                <p>{location}</p>
                <p>{speaker}</p>
                <p>{start}</p>
                <p>{end}</p>
            </div>
        </ItemStyle>
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