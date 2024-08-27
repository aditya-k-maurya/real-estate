import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(request: any) {
	try {
    cookies().delete("token");
    
		return NextResponse.json(
			{
				success: true,
				message: "Logout Successful",
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
				message: `Failed to Logout User: ${error.message}`,
			},
			{
				status: 500,
			}
		);
	}
}
