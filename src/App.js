import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: "Hello",
          liked: true
        },
        {
          text: "World",
          liked: false
        }
      ]
    }

  }

  handleTweet(tweetText) {
    let tweetObj = {
      text: tweetText,
      liked: false
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map((t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        }
      }
      return t;
    });
    this.setState({
      tweets
    })
  }

  handleDelete(tweet) {
    let tweets = this.state.tweets.map((t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        }
      }
      return t;
    });
    this.setState({
      tweets
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <TweetBox prompt="what's your tom"
            onTweet={this.handleTweet.bind(this)}
          />
        </div>
        <div>
          {this.state.tweets.map((tweet) => (
            <Tweet
              tweet={tweet}
              handleLike={this.handleLike.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
