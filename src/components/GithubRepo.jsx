import React from 'react';
import { Link } from 'react-router';

class GithubRepo extends React.Component {
    constructor(link) {
        super(link);
        this.project_name = link.link.full_name;
        this.link = link.link.html_url;
        console.log(link);
        console.log(this.project_name);
        console.log(this.link);
    }

    render() {
        return (
            <a href={this.link} target="_blank">
                <p className="followers-info__bio">{this.project_name}</p>
            </a>
        );
    }
};

export default GithubRepo;
