import React from "react";
import { useState } from "react";


function NewTaskForm({ onTaskFormSubmit, categories: categoryList }) {
	const [category, setCategory] = useState("");
	const [details, setDetails] = useState("");

  function newUser() {
		let newUser = [...categoryList];
		newUser.shift();
		return newUser;
	};

	return (
		<form
			className="new-form"
			onSubmit={(e) => {
				e.preventDefault();
				if (details === "" || category === "") {
					alert("Ensure all the fields are filled");
				} else {
					onTaskFormSubmit({ text: details, category });
					setDetails("");
					setCategory("");
				}
			}}
		>
			<label>
				Details
				<input
					type="text"
					name="text"
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
			</label>
			<label>
				Category
				<select
					name="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					{newUser().map((res) => (
						<option key={res}>{res}</option>
					))}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}


export default NewTaskForm;
