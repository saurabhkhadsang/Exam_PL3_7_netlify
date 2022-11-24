
import './StudentLogin.css'
import Header from '../Header/Header';


function StudentLogin() {

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
                                        <h2 className="fw-bold py-2 m-2 text-center">Sign Up</h2>
                                        {/* <form role="form"> */}
                                        <div className="form-group m-3">
                                            <input type="text" name="fName"
                                                className="form-control input-lg" placeholder="First Name "  />
                                        </div>

                                        <div className="form-group m-3">
                                            <input type="text" name="lName"
                                                className="form-control input-lg" placeholder="Last Name " />
                                        </div>

                                        <div className="form-group m-3">
                                            <input type="text" name="username" id="username"
                                                className="form-control input-lg" placeholder="username"  />
                                        </div>

                                        <div className="form-group m-3">
                                            <input type="email" name="email"
                                                className="form-control input-lg" placeholder="email"  />
                                        </div>

                                        <div className="form-group m-3">
                                            <input type="password" name="password" id="password"
                                                className="form-control input-lg" placeholder="Password"  />
                                        </div>

                                        <div className="d-flex justify-content-center m-3">
                                            <button className="btn btn-outline-danger rmdbut rounded-2 grnbtn shadow"> SIGN UP </button>
                                        </div>

                                        <div className="text-center">
                                            <p>Already User ? <a className="blulink" >Sign In</a>  </p>
                                        </div>
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