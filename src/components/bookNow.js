import React from 'react'
import { InlineWidget } from "react-calendly";
const BookNow = () => {
    return (
        <div style={{padding: '5%'}}>
             <h2>
                 Schedule Your Appointment
            </h2>
            <InlineWidget url="https://calendly.com/lorientskincare" />
        </div>
    )
}

export default BookNow
