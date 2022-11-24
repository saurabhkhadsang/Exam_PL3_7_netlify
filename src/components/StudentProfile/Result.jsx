import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Result = () => {
    return (
        <>


            <div className="p-3 mb-2  " style={{ position: "absolute", textAlign: "", marginLeft: "10%" }}>

                <div className="my-3 py-3 rounded-2" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                    <h1 className="text-center ">Account Detail </h1>

                    <div className="container my-5">
                        <div className="row row-cols-1 row-cols-md-2 g-4 my-3">
                            <div className="col">
                                <h5 className="fw-bold">Name : Ramesh Gupata </h5>
                                <h5 className="fw-bold">PRN : 2020BTECS34698 </h5>
                                <h5 className="fw-bold">Branch : Computer Science and Engineering </h5>
                                <h5 className="fw-bold">Email : rameshgupat@walchadnsangli.ac.in </h5>
                            </div>

                        </div>

                    </div>

                </div>


                <div>
                    <div className="m-1 p-1 mb-3" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                        <div className="">
                            <h5 className="text-center" >Odd Semester AY 2021-22</h5>
                            <h5 className="text-center" >BTECSSEM5 - Third Semester</h5>
                        </div>
                        <div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Corse Code</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Total Credits</th>
                                        <th scope="col">Max Marks</th>
                                        <th scope="col">T1/LA1</th>
                                        <th scope="col">T2/LA2</th>
                                        <th scope="col">ESE</th>
                                        <th scope="col">REM</th>
                                        <th scope="col">Grace Marks</th>
                                        <th scope="col">Total Marks</th>
                                        <th scope="col">Out of 100</th>
                                        <th scope="col">Grade </th>
                                        <th scope="col">Grade Points</th>
                                        <th scope="col">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>






                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="m-1 p-1 mb-3" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                        <div className="">
                            <h5 className="text-center" >Odd Semester AY 2021-22</h5>
                            <h5 className="text-center" >BTECSSEM5 - Third Semester</h5>
                        </div>
                        <div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Corse Code</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Total Credits</th>
                                        <th scope="col">Max Marks</th>
                                        <th scope="col">T1/LA1</th>
                                        <th scope="col">T2/LA2</th>
                                        <th scope="col">ESE</th>
                                        <th scope="col">REM</th>
                                        <th scope="col">Grace Marks</th>
                                        <th scope="col">Total Marks</th>
                                        <th scope="col">Out of 100</th>
                                        <th scope="col">Grade </th>
                                        <th scope="col">Grade Points</th>
                                        <th scope="col">Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>


                                    <tr>
                                        <td>5MA201</td>
                                        <td>Probability and Statistics</td>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>17</td>
                                        <td>17</td>
                                        <td>41</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>75</td>
                                        <td>75</td>
                                        <td>BB</td>
                                        <td>8</td>
                                        <td>PASS</td>
                                    </tr>






                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


            </div>

            <div style={{ position: 'fixed' }}>
                <Sidebar />
            </div>



        </>
    );
}

export default Result;