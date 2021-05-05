import React from 'react';
import { Link } from 'react-router';

class GithubRepo extends React.Component {
    constructor(link) {
        super(link);
        this.project_name = link.link.full_name;
        this.link = link.link.html_url;
        this.stars = link.link.stargazers_count;
        console.log(link);
        console.log(this.project_name);
        console.log(this.link);
    }

    render() {
        return (
            <a href={this.link} target="_blank">
                <span className="followers-info__bio">{this.project_name}</span>
                <span className="stars">Stars: {this.stars}</span>
                <p></p>
            </a>
        );
    }
};

export default GithubRepo;
