import React from 'react';
import classes from './app-title.module.css';

type AppTitlePropsType = {
    title: string
}

const AppTitle = (props: AppTitlePropsType) => {
    return (
        <div className={classes['app-title']}>
            {props.title}
        </div>
    );
}

export default  AppTitle;