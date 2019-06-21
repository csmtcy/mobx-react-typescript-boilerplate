import * as React from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "./../utils/routes";
import Global from './../utils/global';
import { useTranslation, Trans } from "react-i18next";
import DevTools from 'mobx-react-devtools';

const AppLayout = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <Router>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >NavBar</NavBar>
            <div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Button onClick={() => changeLanguage("en")}>English</Button>
                            <Button onClick={() => changeLanguage("cn")}>Chinese</Button>
                        </li>
                    </ul>
                </nav>

                <Routes />
            </div>
            {Global.isDevelopment(<DevTools />)}
        </Router>
    )
}

export default AppLayout;