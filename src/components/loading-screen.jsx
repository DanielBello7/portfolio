import { FormattedMessage } from "react-intl";

export default function LoadingScreen() {
  return (
    <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">
          <FormattedMessage id="loadingMsg" />
        </span>
      </div>
    </div>
  )
}

