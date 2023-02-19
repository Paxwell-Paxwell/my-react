import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Review() {
    const [file, setFile] = React.useState(null);
    const [url, setUrl] = React.useState(null);
    function fileChange(event) {
        setFile(event.target.files[0]);
        const url = URL.createObjectURL(event.target.files[0]);
        setUrl(url);
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid px-4">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Convert unit
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Preview image
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6 text-center">
                        <h1 className="mb-4">Preview image</h1>
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="card shadow">
                                    {file && <img src={url} className="card-img-top" alt="..." />}
                                    {!file && 
                                        <div className="card-body p-4">
                                            <i className="bi bi-images text-secondary fs-1"></i>
                                            <p className="card-text text-secondary fs-4">
                                                choose file to preview
                                            </p>
                                        </div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input className="form-control" type="file" onChange={fileChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
