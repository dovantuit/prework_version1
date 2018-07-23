import React, { Component } from 'react';
class Tweet extends Component {

    

    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                {tweet.text}
                
                <br />
                <a href='#' onClick={() => this.props.handleLike(tweet)}>
                    {tweet.liked ? 'Unlike' : 'Like'} Post</a>
                <button
                    onClick={() => this.props.onTweetDelete(this.state.tweet)}
                    
                > Delete </button>
            </div>
        )
    }
}
export default Tweet;