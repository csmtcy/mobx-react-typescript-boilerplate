import * as React from 'react';
import { useTranslation, Trans, withTranslation, WithTranslation } from "react-i18next";
import { test } from './../services'

// function component apply i18n method
// const HomeScreen = () => {
//     const {t, i18n} = useTranslation();
//     return (
//         <div>{t("Welcome to React")}</div>
//     )
// }

// class component apply i18n method
class HomeScreen extends React.Component<WithTranslation> {

    componentDidMount() {
        test().then((result) => {
            console.log(result);
        });
    }

    render() {
        const { t, tReady } = this.props;

        return (
            <div>
                <h2>{tReady && t("Welcome to React")}</h2>
            </div>
        )
    }
}

export default withTranslation()(HomeScreen);