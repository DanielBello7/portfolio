import { IntlProvider } from 'react-intl';
import React from 'react';
import ToastComponent from './components/ToastComponent';
import useStringResources from './hooks/useStringResource';
import MainApp from './MainApp';

function App() {
    const locale = navigator.language || 'en';
    const messages = useStringResources();
    return (
        <React.Fragment>
            <IntlProvider locale={locale} messages={messages}>
                <MainApp />
                <ToastComponent />
            </IntlProvider>
        </React.Fragment>
    )
}

export default React.memo(App);