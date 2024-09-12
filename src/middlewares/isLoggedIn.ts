// isLoggedIn.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function isLoggedIn(request: NextRequest) {
	const token = request.cookies.get("authToken")?.value;
	if (!token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
	return null; // Continue if logged in
}
