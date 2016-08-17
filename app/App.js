import React from 'react';
import fetch from 'simple-fetch';
import styles from './App.css';

const API_URL = 'https://api.github.com/users';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            userFound: false,
            apiMsg: '',
            repos: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({ inputValue: value });

        (value !== '') ?
            fetch.getJson(`${API_URL}/${value}/repos`)
                .then(result => this.setState({ repos: result, userFound: true }))
                .catch(err => {
                    this.setState({ repos: [], userFound: false, apiMsg: err.message });
                }) :
            this.setState({ repos: [] });
    }

    render() {
        return (
            <div className={styles.app}>
                <h2>Github repos by user name</h2>
                <input className={styles.input} placeholder="Enter a username" value={this.state.inputValue} onChange={this.handleInputChange} />
                {this.state.userFound && this.state.repos.length > 0 ?
                    this.state.repos.map((repo, index) => {
                        return <div key={index} className={styles.repoName}>{repo.full_name}</div>;
                    }) :
                    <div className={styles.redText}>{this.state.apiMsg}</div>
                }
            </div>
        );
    }
}
