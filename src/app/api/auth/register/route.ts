import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: any) {
	try {
		const { username, email, password } = await request.json();

		// Check if the email or username already exists
		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [{ email }, { username }],
			},
		});

		if (existingUser) {
			// If user with the same email or username exists, return an error
			return NextResponse.json(
				{
					success: false,
					message:
						"Username or email already exists. Please choose a different one.",
				},
				{
					status: 400, // Bad Request
				}
			);
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create the new user
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		console.log(newUser);

		// Return a successful response
		return NextResponse.json(
			{
				success: true,
				message: "User registration successful",
			},
			{
				status: 200,
			}
		);
	} catch (error: any) {
		// Return an error response
		return NextResponse.json(
			{
				success: false,
				message: `Failed to create user: ${error.message}`,
			},
			{
				status: 500,
			}
		);
	}
}
