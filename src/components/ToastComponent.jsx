import { FormattedMessage } from "react-intl";
import { useModalData } from "../ModalContext";
import React from "react";

export default function ToastComponent() {
	const { toastMsg } = useModalData();
	return (
		<div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 11 }}>
			<div
				className="toast hide"
				id="liveToast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div className={`toast-header text-white ${toastMsg.type ? "bg-success" : "bg-danger"}`}>
					<strong className="me-auto">
						<FormattedMessage id="tostTitle" />
					</strong>
					<small>
						<FormattedMessage id="tostSub" />
					</small>
					<button
						data-bs-dismiss="toast"
						className="btn-close"
						type="button"
						aria-label="Close"
					/>
				</div>
				<ModalBody />
			</div>
		</div>
	)
}

function ModalBody() {
	const { toastMsg } = useModalData();
	return (
		<React.Fragment>
			<div className="toast-body text-start">
				{toastMsg.msg}
			</div>
		</React.Fragment>
	)
}
