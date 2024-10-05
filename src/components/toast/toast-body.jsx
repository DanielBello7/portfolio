import { useModalData } from '@/modal-context.jsx';

export default function ToastBody() {
  const { toastMsg } = useModalData();
  return (
    <div className="toast-body text-start">
      {toastMsg.msg}
    </div>
  )
}

