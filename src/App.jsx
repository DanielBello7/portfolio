import { IntlProvider } from 'react-intl';
import React from 'react';
import Toast from "@/components/toast";
import useStringResources from './hooks/use-string-resource';
import AppRouter from './app-router';

export default React.memo(function App() {
	const locale = navigator.language || 'en';
	const messages = useStringResources();
	return (
		<React.Fragment>
			<IntlProvider locale={locale} messages={messages}>
				<AppRouter />
				<Toast />
			</IntlProvider>
		</React.Fragment>
	)
});

