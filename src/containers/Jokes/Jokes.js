import React, {Component} from 'react'

class Jokes extends Component {
    
    render() {
        const joking_space = {
                display: "grid",
                gridAutoFlow: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,.2)",
                backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 5px, rgba(255,255,255,0.01) 5px, rgba(255,255,255,0.01) 10px), repeating-linear-gradient(to right, rgba(70,70,70,0.01), rgba(70,70,70,0.01) 5px, rgba(255,255,255,0.01) 5px, rgba(255,255,255,0.01) 10px)",
                marginTop: "10px",
                marginBottom: "10px",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
            }
        const emoji = {fontSize: "20px"}
        const joke = {
                fontStyle: "italic",
                textAlign: "center"
            }
        return(
            <div style={joking_space}>
                <span style={emoji} role="img" aria-label="laughting emoji">😆</span> 
                <span style={joke}>
                    "My dog used to chase people on a bike a lot.
                    It got so bad that I had to take his bike away."
                </span> 
                <span style={emoji} role="img" aria-label="laughting emoji">😆</span> 
            </div>
        )    
    }
}

export default Jokes