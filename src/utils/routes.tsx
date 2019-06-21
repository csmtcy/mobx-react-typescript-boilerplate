import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AboutScreen from './../screens/aboutScreen'
import HomeScreen from './../screens/homeScreen'

export const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
        </React.Fragment>
    )
}