import React from 'react';
import classes from './app-keyboard.module.css';
import SingleButton from "./Single-button/single-button";

type AppKeyboardPropsType = {}

const AppKeyboard = (props: AppKeyboardPropsType) => {
return (
    <div className={classes['app-keyboard']}>
        <SingleButton
        title="Start/Stop"
        />
        <SingleButton
        title="Wait"
        />
        <SingleButton
        title="Reset"
        />
    </div>
)
}

export default AppKeyboard;