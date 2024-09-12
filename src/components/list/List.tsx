import "./list.scss";
import Card from "../card/Card";
import { listData } from "@/lib/data";
import { Apartment } from "@/lib/types";


function List() {
	return (
		<div className="list">
			{listData.map((item: Apartment) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
}

export default List;
