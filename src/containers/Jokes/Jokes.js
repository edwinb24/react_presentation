import React, {Component} from 'react'

const dadJokesURL = "https://icanhazdadjoke.com/"

class Jokes extends Component {
    state = {
        joke: "My dog used to chase people on a bike a lot. It got so bad that I had to take his bike away."
    }

    giveMeAJoke = (newJoke) => {
        this.setState ({
            joke: newJoke
        })
    }

    async componentDidMount () {
        try {
            const resp = await fetch(dadJokesURL,{
                headers: {
                    Accept: 'application/json '
                }
            })
            const joke = await resp.json()
            if (!joke) {
            throw Error(resp.statusText);
            }
            this.giveMeAJoke(joke.joke)
        } catch (error) {
            console.log(
            `%c 🤦Oh no! No dad jokes  🤦\n 
            ${error}`, "color: orange; font-size: 18px; font-weight: 800"
            )
        }
    }
    
    componentDidUpdate() {
        console.log('[Jokes.js] componentDidUpdate');
    }
    
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
                    "{this.state.joke}"
                </span> 
                <span style={emoji} role="img" aria-label="laughting emoji">😆</span> 
            </div>
        )    
    }
}

export default Jokes