import React from 'react';
import classes from './single-button.module.css';

type SingleButtonPropsType = {
    title: string
}

const SingleButton = (props: SingleButtonPropsType) => {
    return(
        <button
            className={classes['single-button']}
            disabled>
            {props.title}
        </button>
    )
}

export default SingleButton;