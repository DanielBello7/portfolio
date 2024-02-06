import { FormattedMessage } from "react-intl";
import { useModalData } from '@/modal-context.jsx';
import ToastBody from "./toast-body";
import React from "react";

export default function Toast() {
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
        <ToastBody />
      </div>
    </div>
  )
}

