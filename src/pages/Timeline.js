import React, { Component } from 'react';
import './Timeline.css';
import twitterLogo from "../twitter.svg";

class Timeline extends Component {
    state = {
        newTweet: ''
    }

    handleInputChange = (e) => {
        this.setState({ newTweet: e.targer.value });
    }

    render() {
        return (
            <div className='timeline-wrapper'>
                <image src={twitterLogo} height={24} alt="Gotwitter" />

                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder='O que está acontecendo ?'
                    />
                </form>


            </div>
        );
    }
}

export default Timeline;
