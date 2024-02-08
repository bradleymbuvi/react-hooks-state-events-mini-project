import React from "react";
import { useState } from "react";


function CategoryFilter({ categories: category, filterTasks }) {
	const [active, setActive] = useState("All");
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{category.map((user) => (
				<button
					className={user === active ? "selected" : ""}
					key={user}
					onClick={() => {
						filterTasks(user);
						setActive(user);
					}}
				>
					{user}
				</button>
			))}
		</div>
	);
}

export default CategoryFilter;
