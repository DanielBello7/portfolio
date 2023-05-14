function SuspenseScreen() {
    return (
        <div className="w-100 d-flex align-items-center justify-content-center" style={{ minHeight: '600px' }}>
            <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default SuspenseScreen;