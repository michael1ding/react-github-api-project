import React from 'react';

class GithubUser extends React.Component {
    constructor(user) {
        this.avatar = user.avatar_url;
        this.username = user.login;
    }

    render() {
        return (
            <Link to={`/user/${this.username}`} >
                <img src={`${this.avatar}`} />
                ziad-saab
            </Link>
        );
    }
};

export default GithubUser;
