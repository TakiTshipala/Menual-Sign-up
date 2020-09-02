import React from "react"
import withLabel from "./withLabelTerms";
import "./Styles/styles.scss";


class Surname extends React.Component {

    static labelText = ""

    constructor(props) {
        super(props)
        this.state = {
            style: "",
            hasError: false,
            InvalidatedUsernameMessage: ""
        }
    }



    onChangeStyle = {
        onDefault: () => {
            this.setState({
                style: 'bg-white focus:shadow-outline-sm  ',
                hasError: false
            })
        }
    }

    render() {

        const { } = this.state
        return (
            <div className = "Already">
                <label>Already a member?</label>
                <a href="url" className = "Signin"> Sign in </a>
            </div>
        )
    }
}

export default withLabel(Surname)
