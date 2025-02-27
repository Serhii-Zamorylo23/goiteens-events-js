import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaMapMarkerAlt, FaUser, FaClock} from 'react-icons/fa';
import { BsFillSignStopFill } from "react-icons/bs";
const ItemStyle=styled.li`
    width: 300px;
    background: #f8dd86ae;
    border: 3px solid yellow;
    list-style: none;
    border-radius: 20px;
`
const DivStyle=styled.div`
    display: flex;
    flex-direction: column;
`
const Event =({name,start,end,location,speaker})=>{
    return(
        <ItemStyle>
            <h2>{name}</h2>
            <DivStyle>
                <p>
                <FaMapMarkerAlt color="orange"/> {location}
                </p>
                <p><FaUser color="#3d405b"/> {speaker}
                </p>
                <p>
                <FaClock color="#110e09"/> {start}
                </p>
                <p>
                <BsFillSignStopFill color="red"/> {end}
                </p>
            </DivStyle>
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