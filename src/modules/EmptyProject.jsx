import { FormattedMessage } from 'react-intl';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

function EmptyProject() {
    return (
        <div className="container-xl w-100 vh-100">
            <main className="w-100 my-5 d-flex flex-column align-items-center">
                <h1 className="col-12 col-md-10 col-lg-8 text-center" id="select-another">
                    <FormattedMessage id="emptyProjectTitleMsg" />
                </h1>
                <Link to="/" className="btn btn-dark d-flex flex-row align-items-center px-4 my-3 py-2">
                    <FaArrowLeft size={15} className="me-1" />
                    <span>
                        <FormattedMessage id="emptyProjectButton" />
                    </span>
                </Link>
            </main>
        </div>
    );
}

export default EmptyProject;