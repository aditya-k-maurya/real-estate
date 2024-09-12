import Link from "next/link";
import Image from "next/image";
import "./card.scss";

interface CardProps {
	item: {
		id: number;
		title: string;
		img: string;
		bedroom: number;
		bathroom: number;
		price: number;
		address: string;
		latitude: number;
		longitude: number;
	};
}

const Card: React.FC<CardProps> = ({ item }) => {
	return (
		<div className="card">
			<Link href={`/${item.id}`} className="imageContainer">
				{/* Using Next.js Image component for optimization */}
        <img
          className="card-img"
					src={item.img}
					alt={item.title}
				/>
			</Link>
			<div className="textContainer">
				<h2 className="title">
					<Link href={`/${item.id}`}>{item.title}</Link>
				</h2>
				<p className="address">
					<Image src="/pin.png" alt="Location Pin" width={16} height={16} />
					<span>{item.address}</span>
				</p>
				<p className="price">$ {item.price}</p>
				<div className="bottom">
					<div className="features">
						<div className="feature">
							<Image src="/bed.png" alt="Bedroom" width={16} height={16} />
							<span>{item.bedroom} bedroom</span>
						</div>
						<div className="feature">
							<Image src="/bath.png" alt="Bathroom" width={16} height={16} />
							<span>{item.bathroom} bathroom</span>
						</div>
					</div>
					<div className="icons">
						<div className="icon">
							<Image src="/save.png" alt="Save" width={16} height={16} />
						</div>
						<div className="icon">
							<Image src="/chat.png" alt="Chat" width={16} height={16} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
