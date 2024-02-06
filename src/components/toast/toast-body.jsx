import * as React from "react";
import { useModalData } from '@/modal-context.jsx';

export default function ToastBody() {
  const { toastMsg } = useModalData();
  return (
    <React.Fragment>
      <div className="toast-body text-start">
        {toastMsg.msg}
      </div>
    </React.Fragment>
  )
}

