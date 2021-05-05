import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("here1");
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
            .then(response => response.json())
            .then(
                links => {
                    // How can we use `this` inside a callback without binding it??
                    // Make sure you understand this fundamental difference with arrow functions!!!
                    this.setState({
                        links: links
                    });
                }
            );
    }

    render() {
        console.log("here2");
        console.log(this.state.links);
        if (!this.state.links) {
            return <div>LOADING REPOS...</div>
        }
        return (
            <div className="followers-page">
                <h2>Projects by {this.props.params.username}</h2>
                <ul>
                    {this.state.links.map(index => {
                        return <GithubRepo link={index}/>
                    })}
                </ul>
            </div>
        );
    }
};

export default Repos;
