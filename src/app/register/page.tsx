'use client'
import Link from "next/link";
import "./register.scss";
import { useState } from "react";

function Register() {
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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
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
