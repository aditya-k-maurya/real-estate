import { NextResponse } from "next/server";

export async function POST(request:any) {
	try {
		const { username, email, password } = await request.json();

		console.log(username, email, password);

		// Return a successful response
		return NextResponse.json(
			{
				success: true,
				message: "Registration successful",
			},
			{
				
				status: 200,
			}
		);
	} catch (error:any) {
		// Return an error response
		return NextResponse.json(
			{
				success: false,
				message: `Something went wrong: ${error.message}`,
			},
			{
				status: 500,
			}
		);
	}
}
