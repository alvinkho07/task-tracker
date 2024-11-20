import React from "react";

function Task({ task, onDelete }) {
    return (
        <div>
            <h3>
                {task.text}{" "}
                <button onClick={() => onDelete(task.id)} style={{ color: "red" }}>
                    Delete
                </button>
            </h3>
        </div>
    );
}

export default Task;
