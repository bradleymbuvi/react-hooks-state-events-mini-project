import React from "react";
import Task from "./Task";


function TaskList({ tasks, delTasks }) {
	return (
		<div className="tasks">
			{tasks.map((list) => (
				<Task
					key={list.text}
					text={list.text}
					delTasks={delTasks}
					category={list.category}
				/>
			))}
		</div>
	);
}

export default TaskList;
