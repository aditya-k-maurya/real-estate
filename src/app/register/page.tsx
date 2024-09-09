"use client";
import Link from "next/link";
import "./register.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Register() {
	const router = useRouter();
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		username: "",
		email: "",
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
		try {
			const res = await axios.post("api/auth/register", formData);
			setMessage(res.data.message); // Display the success message

			if (res.data.success) {
				// Navigate to the login page after successful registration
				router.push("/login");
			}
		} catch (error: any) {
			setMessage(error.response?.data.message || "Registration failed.");
			console.log(message)
		}
	};

	return (
		<div className="register">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<h1>Create an Account</h1>
					<input
						name="username"
						type="text"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
					/>
					<input
						name="email"
						type="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
					/>
					<button type="submit">Register</button>
					<Link href="/login">Do you have an account?</Link>
				</form>
			</div>
			<div className="imgContainer">
				<img src="/bg.png" alt="Background" />
			</div>
		</div>
	);
}

export default Register;
