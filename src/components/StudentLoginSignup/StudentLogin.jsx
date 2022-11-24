import { useNavigate } from "react-router-dom";
import './StudentLogin.css'

import Header from "../Header/Header";


function StudentLogin() {
    const navigate = useNavigate();


    return (
        <>
            <Header />

            <div className="p-3 mb-2  ">
                <div className="container">

                    <div className="row  py-5 m-2 justify-content-md-center ">
                        <div className="col-sm-5">
                            <div className="row bxshdow rounded-3 p-1">
                                <div className="col-sm-12  d-flex flex-column justify-content-center ">

                                    <div className="justify-content-center align-items-center">
                                        <h2 className="fw-bold py-2 m-2 text-center">Login</h2>
                                        <form role="form">
                                            <div className="form-group m-3">
                                                <label for="exampleInputEmail1" class="form-label">PRN</label>
                                                <input type="text" name="PRN" id="PRN" className="form-control input-lg" placeholder="PRN" />
                                            </div>

                                            <div className="form-group m-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input type="password" name="password" id="password"
                                                    className="form-control input-lg" placeholder="Password" />
                                            </div>

                                            <div className="d-flex justify-content-center m-3">
                                                <button type="button" className="btn btn-outline-danger rmdbut rounded-3 grnbtn shadow" > Login </button>
                                            </div>


                                            <div className="text-center">
                                                <p>New User ? <a className="blulink" onClick={() => navigate("/StudentSignup")} >Sign Up</a></p>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>




                </div>

            </div>













        </>


    );
}

export default StudentLogin;