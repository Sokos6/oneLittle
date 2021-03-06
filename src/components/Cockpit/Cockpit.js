import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold);
    }

    return(
        <Aux>
        <div className={classes.Cockpit}>
        <p className={assignedClasses.join( ' ')}>This is really working!</p>
        <button className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
        </Aux>  
    );
}

export default Cockpit;