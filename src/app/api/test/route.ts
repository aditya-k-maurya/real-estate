
export async function GET(request: Request) {
	return Response.json(
		{
			success: true,
			message:"Hello world",
		},
		{ status: 200 }
	);
}
