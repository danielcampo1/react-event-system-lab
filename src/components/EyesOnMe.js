
import React from "react"

// Code EyesOnMe Component Here
class EyesOnMe extends React.Component {

    handleFocus = () => {
        console.log('Good!');
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!");
    }



    render() {
        return(
            <div>
                <button onFocus = {this.handleFocus} onBlur = {this.handleBlur}>
                    Hello!
                </button>
            </div>
        )
    } 
}

export default EyesOnMe;


