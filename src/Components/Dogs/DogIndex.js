import React, {Component} from 'react'


 class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }


    componentDidMount() {
      
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
                
            })
            .catch(console.log("I just threw a console log in there. You suck or you failed or something"))
    }
    
    getDog = (event) => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {this.setState({
            img: data.message
        })})
        .catch(console.log("I just threw a console log in there. You suck or you failed or something"))
    }

    render() {
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <img src={this.state.img}/>
                <button onClick={this.getDog}>This is a button thing</button>
            </div>
        )
    }
}

export default DogIndex