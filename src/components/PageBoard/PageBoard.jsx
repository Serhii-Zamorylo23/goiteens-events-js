import React from "react";
import PropTypes from "prop-types"; 
import Event from "../Event/Event";
import styled from "styled-components";

const DivStyled=styled.div`
    display: flex;
    margin: 0 auto;
    width: 95%;
    height: 50px;
    background: #288ccb5c;
    border: 3px solid blue;
    border-radius: 5px;
    justify-content: center;
    font-size: 22px;
    align-items: center;
`
const Liststyle=styled.ul`
    display: flex;
    margin: 0 auto;
    width: 93%;
    background: #80808078;
    border: 3px solid gray;
    margin-top: 40px;
    border-radius: 5px;
    flex-wrap: wrap ;
    padding: 40px 30px 60px 30px;
    justify-content: space-between;
    row-gap: 40px;
`

const PageBoard=({events})=>{
    return(
        <>
        <DivStyled>
            <p>24th Core Worlds Coalition Conference</p>
        </DivStyled>
        {
            <Liststyle>
                {
                    events.map((event)=>{
                        return(
                            <>
                                <Event name={event.name} location={event.location} speaker={event.speaker} start={event.time.start} end={event.time.end} />
                            </>
                        )
                    })
                }
            </Liststyle>
        }
        </>
    )
}
export default PageBoard

PageBoard.propTypes={
    events:PropTypes.array.isRequired
}