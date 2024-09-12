// isAdmin.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function isAdmin(request: NextRequest) {
	const token:any = request.cookies.get("authToken")?.value;

	// Get user role from token
	const userRole = getUserRoleFromToken(token);

	if (userRole !== "admin") {
		return NextResponse.redirect(new URL("/403", request.url));
	}
	return null;
}

// Helper function
function getUserRoleFromToken(token: string): string {
	// Example of decoding token to get the role
	return "user"; // Adjust this based on your token structure
}
