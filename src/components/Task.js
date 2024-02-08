import React from "react";

function Task({ text, category, delTasks }) {
	return (
		<div className="task">
			<div className="label">{category}</div>
			<div className="text">{text}</div>
			<button className="delete" onClick={() => delTasks(text)}>X</button>
		</div>
	);
}

export default Task;
