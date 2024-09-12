// Interface for listData (apartment listing)
export interface Apartment {
	id: number;
	title: string;
	img: string;
	bedroom: number;
	bathroom: number;
	price: number;
	address: string;
	latitude: number;
	longitude: number;
}

// Interface for singlePostData (detailed apartment post)
export interface SinglePost {
	id: number;
	title: string;
	price: number;
	images: string[];
	bedRooms: number;
	bathroom: number;
	size: number;
	latitude: number;
	longitude: number;
	city: string;
	address: string;
	school: string;
	bus: string;
	restaurant: string;
	description: string;
}

// Interface for userData (user details)
export interface User {
	id: number;
	name: string;
	img: string;
}
