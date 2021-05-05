import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {
    constructor(user) {
        super(user);
        this.name = user.user.login;
        this.image = user.user.avatar_url;
        console.log(user.user);
        console.log(user.user.login);
        console.log(user.user.avatar_url);
    }

    render() {
        return (
            <Link to={`/user/${this.name}`} >
                <img src={this.image} className="followers-info__avatar" />
                <span className="followers-info__bio">{this.name}</span>
                <p></p>
            </Link>
        );
    }
};

export default GithubUser;
