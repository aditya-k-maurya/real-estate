// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLoggedIn } from "@/middlewares/isLoggedIn";
import { isAdmin } from "@/middlewares/isAdmin";

export function middleware(request: NextRequest) {
	const response = isLoggedIn(request);
	if (response) return response; // Redirect if user is not logged in

	const adminResponse = isAdmin(request);
	if (adminResponse) return adminResponse; // Redirect if not an admin

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*", "/dashboard/:path*"],
};
