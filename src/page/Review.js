import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

// import Navbar from "../component/Navbar";   

export default function Review() {
    const [file, setFile] = React.useState(null);
    const [url, setUrl] = React.useState(null);
    const [namefile, setNamefile] = React.useState("");

    const uploadFileRef = React.useRef(null);
    function fileChange(event) {
        if(event.target.files[0]) // null undefined 0 false
        {
            setFile(event.target.files[0]);
            setNamefile(event.target.value);
            console.log(event.target.files[0]);
            const url = URL.createObjectURL(event.target.files[0]);
            setUrl(url);
        }
        else {
            setNamefile('');
        }
    }
    function chooseImage(){
        console.log(uploadFileRef.current)
        uploadFileRef.current.click()
    }
    return (
        <>
            {/* <Navbar /> */}
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6 text-center">
                        <h1 className="mb-4">Preview image</h1>
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div  className="card shadow ">
                                    {file && 
                                        <div className="position-relative">
                                            <i style={{
                                                position: "absolute",
                                                top: "5%",
                                                right: "5%",
                                                fontSize: "2rem",
                                                cursor: "pointer"
                                            }} className="bi bi-trash text-secondary " onClick={()=>{
                                                setFile(null)
                                                setNamefile("")
                                            }
                                                } ></i>
                                            <img src={url} className="card-img-top" alt="..." />
                                        </div>
                                    }
                                    {!file && 
                                        <div className="card-body p-4 " style={{
                                            cursor: "pointer"
                                        }} onClick={chooseImage}>
                                            
                                            <i  className="bi bi-images text-secondary fs-1"></i>
                                            <p className="card-text text-secondary fs-4">
                                                choose file to preview
                                            </p>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="row d-none">
                            <div className="col-12">
                                <input ref={uploadFileRef} value={namefile} className="form-control" type="file" onChange={fileChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
