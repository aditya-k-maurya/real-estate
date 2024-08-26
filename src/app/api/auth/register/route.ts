import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: any) {
	try {
		const { username, email, password } = await request.json();

		const hashedPassword = await bcrypt.hash(password, 10);

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
				message: "User Registeration Successful",
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
				message: `Failed to create User: ${error.message}`,
			},
			{
				status: 500,
			}
		);
	}
}
