import React from 'react';
import GithubUser from './GithubUser';

class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("here1");
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
            .then(response => response.json())
            .then(
                followers => {
                    // How can we use `this` inside a callback without binding it??
                    // Make sure you understand this fundamental difference with arrow functions!!!
                    this.setState({
                        followers: followers
                    });
                }
            );
    }

    render() {
        console.log("here2");
        console.log(this.state.followers);
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        }
        return (
            <div className="followers-page">
                <h2>Followers of {this.props.params.username}</h2>
                <ul>
                    {this.state.followers.map(index => {
                        return <GithubUser user={index}/>
                    })}
                </ul>
            </div>
        );
    }
};

export default Followers;
