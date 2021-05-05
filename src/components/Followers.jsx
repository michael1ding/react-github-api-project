import React from 'react';

class Followers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response => response.json())
        .then(
            followers => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    followers: followers
                });
                console.log(followers);
            }
        );
    }

    render() {
        return (
            <div className="followers-page">
                <h3>Followers of USERNAME</h3>
            </div>
        );
    }
};

export default Followers;
