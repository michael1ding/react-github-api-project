import React from 'react';
import GithubUser from './GithubUser';

class Following extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("here1");
        fetch(`https://api.github.com/users/${this.props.params.username}/following`)
            .then(response => response.json())
            .then(
                following => {
                    // How can we use `this` inside a callback without binding it??
                    // Make sure you understand this fundamental difference with arrow functions!!!
                    this.setState({
                        following: following
                    });
                }
            );
    }

    render() {
        console.log("here2");
        console.log(this.state.following);
        if (!this.state.following) {
            return <div>LOADING FOLLOWED...</div>
        }
        return (
            <div className="followers-page">
                <h2>Followed by {this.props.params.username}</h2>
                <ul>
                    {this.state.following.map(index => {
                        return <GithubUser user={index}/>
                    })}
                </ul>
            </div>
        );
    }
};

export default Following;
