import React from 'react';
import superagent from 'superagent';

import RedditList from './list.js';
import Form from './form.js';
import List from './list.js';

// import './style/app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           board: {},
           boardList: [],
        };
        this.updateList = this.updateList.bind(this);
    }

    updateList(redditApi){
        fetch(redditApi).then(function(response){
            return response.json();
        }).then((json) => {
            console.log(json.data.children)
            this.setState({boardList: json.data.children});
        });
    }
    
    render(){
        return(
            <React.Fragment>
                <Form handleApi={this.updateList}/>
                <List results={this.state.boardList}/>
            </React.Fragment>
        )
    }
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);