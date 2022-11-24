import React from "react";
import { useNavigate } from "react-router-dom";
import wcelogo from '../../images/WCE-Sangli-Logo.png';
import Sidebar from './Sidebar';

const Profile = () => {

    return (
        <>

            <div style={{ position: "absolute", textAlign: "", marginLeft: "10%" }}>

                <div className="m-5" >
                    <h6>Username : 2020BTECS00079</h6>
                    <h6>Full Name : Khadsang Saurabh Santosh Ratnamala</h6>
                    <h6>Full Name : Khadsang Saurabh Santosh</h6>
                    <h6>Gender : Male</h6>
                    <h6>Caste : -</h6>
                    <h6>E-mail : 2020btecs00079@walchandsangli.ac.in</h6>
                    <h6>Mobile : 9175486500</h6>
                    <h6>Enrollment Number : 2020BTECS00079</h6>
                    <h6>Date of Birth : 2003-04-26</h6>
                    <h6>Migrated Student : -</h6>
                    <h6>Migration Year : -</h6>
                    <h6>Migration Year : -</h6>
                    <h6>Is Lateral Admission : -</h6>
                    <h6>Lateral Admission Year : -</h6>
                    <h6>Migration Year : -</h6>
                    <h6>Previous University CGPA (Migrated Student) : -</h6>
                    <h6>Equivalent Credits completed (Migrated Student) : -</h6>
                    <h6>Equivalent Total Crdits registered (Migrated Student) : -</h6>
                    <h6>Admission Year * :  2020 - 2021</h6>
                    <h6>Program : BTECS / B.Tech. (Computer Science and Engineering) / 2020 / Published</h6>
                    <h6>Programs : CSE / Dept of Computer Science and Engineering</h6>
                    <h6>Institute : 2020BTECS00079</h6>
                    <h6>Registration Date * : 2021-03-30</h6>
                    <h6>Father's Full Name : Santosh</h6>
                    <h6>Mother's First Name : Ratnamala</h6>

                </div>
              
            </div>

            <div style={{ position: 'fixed' }}>
                <Sidebar />
            </div>


        </>
    );
}

export default Profile;