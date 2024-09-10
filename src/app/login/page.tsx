"use client";
import Link from "next/link";
import { useState } from "react";
import "./login.scss";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await axios.post("/api/auth/login", formData);
			setMessage(res.data);

			localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/");
      
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				// Check if it's an Axios error
				if (error.response) {
					console.error("Server Response Error:", error.response.data);
					setMessage(error.response.data.message || "Something went wrong.");
				} else if (error.request) {
					// The request was made but no response was received
					console.error("Request Error, no response received:", error.request);
					setMessage("No response from server. Please try again later.");
				} else {
					// Something happened in setting up the request that triggered an Error
					console.error("Unexpected Error:", error.message);
					setMessage("An unexpected error occurred.");
				}
			} else {
				// For non-Axios errors
				setMessage("An error occurred.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="login">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<h1>Welcome back</h1>
					<input
						name="username"
						type="text"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
					/>
					<button type="submit" disabled={loading}>
						Login
					</button>
					<Link href="/register">{"Don't"} you have an account?</Link>
				</form>
			</div>
			<div className="imgContainer">
				<img src="/bg.png" alt="Background" />
			</div>
		</div>
	);
}

export default Login;
