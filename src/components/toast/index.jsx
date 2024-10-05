import { FormattedMessage } from "react-intl";
import { useModalData } from '@/modal-context.jsx';
import ToastBody from "./toast-body";
import * as React from "react";
import classNames from "classnames";

export default function Toast() {
  const { toastMsg } = useModalData();
  const cn = classNames("toast-header text-white", {
    "bg-success": toastMsg.type,
    "bg-danger": !toastMsg.type
  });

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 11 }}>
      <div
        className="toast hide"
        id="liveToast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className={cn}>
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

