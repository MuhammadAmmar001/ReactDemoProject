import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../cssModules/features.module.css';

export default function Features() {
    const [userData, setUserData] = useState([]);
    const [isDataAvailable, setIsDataAvailable] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/sampleData");
            if (response.data.length == 0) {
                console.log("response2: " + response)
                setIsDataAvailable(false)
            }
            else {
                setUserData(response.data)
                setIsDataAvailable(true)
            }
        };

        fetchData();
    },
        [])

    return (
        <>
            <Navbar />
            {isDataAvailable ?
                <>
                    <div className="container">
                        <div className="row vh-100 align-items-center">
                            <div className="col-12">
                                <table className={`table table-bordered ${style.cborder}`}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center p-2 text-success" scope="col">First Name</th>
                                            <th className="text-center p-2 text-success" scope="col">Last Name</th>
                                            <th className="text-center p-2 text-success" scope="col">Age</th>
                                            <th className="text-center p-2 text-success" scope="col">Gender</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.map((entry, index) => (
                                            <tr key={index} >
                                                <td className="text-center p-3 ">{entry.fname}</td>
                                                <td className="text-center p-3 ">{entry.lame}</td>
                                                <td className="text-center p-3 ">{entry.age}</td>
                                                <td className="text-center p-3 ">{entry.gender}</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
                : <div className="vh-100 d-flex justify-content-center align-items-center">
                    <h1 className="text-white mb-5 ">No Data Available</h1>
                </div>
            }

        </>
    )
}