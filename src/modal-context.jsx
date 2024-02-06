import { Toast } from "bootstrap";
import * as React from "react";

const ModalContext = React.createContext({});
const useModalData = () => React.useContext(ModalContext);

function ModalContextProvider(props) {
	const [toastMsg, setToastMsg] = React.useState({ msg: "", type: true });

	const ToggleToast = (action, msg, type = true) => {
		const element = document.getElementById("liveToast");
		if (!element) return;
		const toast = Toast.getOrCreateInstance(element);
		setToastMsg({ msg: msg, type: type });
		if (action) return toast.show();
		return toast.hide();
	}

	return (
		<ModalContext.Provider value={{
			setToastMsg,
			toastMsg,

			ToggleToast
		}}>
			{props.children}
		</ModalContext.Provider>
	)
}

export { ModalContextProvider, useModalData }

