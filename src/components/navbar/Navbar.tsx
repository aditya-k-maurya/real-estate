'use client'
import { useState } from "react";
import Link from "next/link";
import "./navbar.scss";

function Navbar() {
	const [open, setOpen] = useState<boolean>(false);

	const user = true;

	return (
		<nav>
			<div className="left">
				<Link href="/" className="logo">
					<img src="/logo.png" alt="LamaEstate Logo" />
					<span>LamaEstate</span>
				</Link>
				<Link href="/">Home</Link>
				<Link href="/">About</Link>
				<Link href="/">Contact</Link>
				<Link href="/">Agents</Link>
			</div>
			<div className="right">
				{user ? (
					<div className="user">
						<img
							src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="User"
						/>
						<span>John Doe</span>
						<Link href="/profile" className="profile">
							<div className="notification">3</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<Link href="/">Sign in</Link>
						<Link href="/" className="register">
							Sign up
						</Link>
					</>
				)}
				<div className="menuIcon">
					<img
						src="/menu.png"
						alt="Menu"
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>
				<div className={open ? "menu active" : "menu"}>
					<Link href="/">Home</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
					<Link href="/">Agents</Link>
					<Link href="/">Sign in</Link>
					<Link href="/">Sign up</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
