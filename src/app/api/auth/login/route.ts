import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request: any) {
	try {
		const { username, password } = await request.json();

		const user = await prisma.user.findUnique({
			where: { username },
		});

		if (!user) {
			return NextResponse.json(
				{ message: "Invalid Credentials!" },
				{ status: 401 }
			);
		}

		const isPassword = await bcrypt.compare(password, user.password);

		if (!isPassword) {
			return NextResponse.json(
				{ message: "Invalid Credentials!" },
				{ status: 401 }
			);
		}

		const token = jwt.sign(
			{
				id: user.id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: 60 * 60 * 24 * 7 }
		);

		cookies().set({
			name: "token",
			value: token,
			httpOnly: true,
			secure: true,
			path: "/",
			maxAge: 60 * 60 * 24 * 7,
		});

		// Return a successful response
		return NextResponse.json(
			{
				success: true,
				message: "User Login Successful",
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
				message: `Failed to login User: ${error.message}`,
			},
			{
				status: 500,
			}
		);
	}
}
