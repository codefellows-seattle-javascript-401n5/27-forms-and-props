import React from 'react';
import superagent from 'superagent';

import RedditList from './list.js';
import Form from './form.js';

// import './style/app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <ul>
                    {this.props.results.map((item, i) => {
                        return <a href={'https://reddit.com' + item.data.permalink}>
                        <li key={i}>
                        {item.data.subreddit}
                        <h3>{item.data.title}</h3>
                        <p>Upvotes {item.data.ups}</p>
                        </li></a>
                        
                    })}
                </ul>
            </React.Fragment>
        )
    }
}