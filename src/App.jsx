import { IntlProvider } from 'react-intl';
import React from 'react';
import Toast from "@/components/toast";
import useStringResources from './hooks/use-string-resource';
import MainApp from './main-app';

function App() {
    const locale = navigator.language || 'en';
    const messages = useStringResources();
    return (
        <React.Fragment>
            <IntlProvider locale={locale} messages={messages}>
                <MainApp />
                <Toast />
            </IntlProvider>
        </React.Fragment>
    )
}

export default React.memo(App);

