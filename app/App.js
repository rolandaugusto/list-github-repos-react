import React from 'react';
import styles from './App.css';


/*
    Main Class which acts as an orchestrator.

    The App renders all the steps and manages the global states
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oneState: true
        };

        // Since I am using an ES6 class the methods need to be bound
        // this.previousStep = this.previousStep.bind(this);
        
    }
    componentDidMount() {
       
    }
    
    render() {

        return (
            <div className={styles.app}>
                
                
            </div>
        );
    }
}
