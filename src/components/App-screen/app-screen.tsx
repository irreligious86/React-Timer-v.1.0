import React from 'react';
import classes from './app-screen.module.css';

type AppScreenPropsTitleType = {

}

const AppScreen = (props: AppScreenPropsTitleType) => {
    console.log(props)
    return (
        <div className={classes['app-screen']}>
            <div className={classes['hours-digit']}>
                <span className={classes["digit"]}>00</span>
                <span className={classes["subtitle"]}>Hours</span>
            </div>
            <div className={classes['minutes-digit']}>
                <span className={classes["digit"]}>02</span>
                <span className={classes["subtitle"]}>Minutes</span>
            </div>
            <div className={classes['seconds-digit']}>
                <span className={classes["digit"]}>07</span>
                <span className={classes["subtitle"]}>Seconds</span>
            </div>
        </div>
    )
}

export default AppScreen;