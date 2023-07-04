import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Header from '../Header/Header';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';



const Signup = () => {
	
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	const googleSuccess = async (res) => {
		//const result = jwt_decode(res?.credential);
		const result = jwt_decode(res?.credential);
		try {
			dispatch({ type: 'AUTH', data: { result } });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
	const googleFailure = (error) => {
		console.log(error);
		console.log("Google Sign In was unsuccessful. Try Again Later");
	};

	return (
		

		<div className={styles.signup_container}>
			<Header />
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit"  className={styles.green_btn}>
							Sing Up
						</button>
						<GoogleLogin
                        render={(renderProps) => (
                            <button className={styles.green_btn}>   Google Sign 
                            </button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
					</form>
				</div>
			</div>
		</div>
		
	);
};

export default Signup;
