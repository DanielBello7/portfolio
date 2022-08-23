


function ToastComponent2({ response, type }) {
  return (
  <div className="position-fixed top-0 end-0 p-3" style={{zIndex: 11}}>
  <div id="liveToast2" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
  <div className={ `toast-header text-white ${type ? "bg-success" : "bg-danger"}`}>
    <strong className="me-auto">Alert</strong>
    <small>Just now</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body text-start">{response}</div>
  </div>
  </div>
  )
}

export default ToastComponent2;