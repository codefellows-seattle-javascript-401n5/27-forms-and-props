import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            number: 0,
        }
        this.subjectInputChange = this.subjectInputChange.bind(this);
        this.numberInputChange = this.numberInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    subjectInputChange(e){
        this.setState({subject: e.target.value});
    }

    numberInputChange(e){
        this.setState({number: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let redditApi = `https://www.reddit.com/r/${this.state.subject}.json?limit=${this.state.number}`
        console.log(redditApi);
        this.props.handleApi(redditApi);
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit = {this.handleSubmit}>
                     Search:
                    <input onChange={this.subjectInputChange} type="text" name="firstname"/>
                    <input onChange={this.numberInputChange} type="number" name="number"/>
                    <button type="submit">submit</button>
                </form>
            </React.Fragment>
        )
    }
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);