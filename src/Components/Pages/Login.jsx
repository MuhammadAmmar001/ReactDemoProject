import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import style from '../cssModules/Login.module.css';


export default function Login() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className={`row vh-100 justify-content-center align-items-center ${style.animatedRow}`}>
                    <div className={`col-10 col-sm-9 col-md-7 col-lg-5 col-xl-4 border border-3 rounded mb-5 ${style.blurredBackground} shadow p-4`}>
                        <form action="/action_page.php" className="p-5">
                            <div className="text-center">
                                <div className="form-group">
                                    <label htmlFor="email" className="text-white">User Id:</label>
                                    <input type="number" className="form-control p-2" id="email" required />
                                </div>

                                <div className="form-group mt-4">
                                    <label htmlFor="pwd" className='text-white'>Password:</label>
                                    <input type="password" className="form-control p-2" id="pwd" required />
                                </div>

                                <button type="submit" className="btn btn-dark mt-5">Submit</button>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </>
    )
}