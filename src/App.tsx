import React from 'react';
import classes from './App.module.css';
import AppTitle from "./components/App-title/app-title";
import AppScreen from "./components/App-screen/app-screen";
import AppKeyboard from './components/App-keyboard/app-keyboard';

type AppType = {
    title: string,
}

const App: React.FC<AppType> = props => {
    return (
        <div className={classes['App']}>
            <AppTitle title={props.title}/>
            <AppScreen />
            <AppKeyboard/>
        </div>
    );
}

export default App;
