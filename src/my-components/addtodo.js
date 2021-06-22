
//import React from 'react'
import React, { useState } from 'react'

export const Addtodo = ({ addtodo }) => {
    const [task, settask] = useState("");
    const [task_name, settask_name] = useState("");
    const [members, setmembers] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!task || !task_name || !members) {
            alert("Plese fill all details prperly");
        }
        else {

            addtodo(task, task_name, members);
            settask("");
            settask_name("");
            setmembers("")
        }
    }
    return (
        <div className="container bg-warning my-2">
            <h5 className="text-center py-3">Add your Todos here</h5>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input type="text" id="task" className="form-control" aria-describedby="emailHelp" value={task} onChange={(e) => { settask(e.target.value) }} placeholder="Enter Task" />
                </div>

                <div className="form-group">
                    <label htmlFor="task_name">Task-Name</label>
                    <input type="textl" id="task_name" className="form-control" aria-describedby="emailHelp" value={task_name} onChange={(e) => { settask_name(e.target.value) }} placeholder="Enter Task Name" />
                </div>

                <div className="form-group">
                    <label htmlFor="members">Members</label>
                    <input type="number" id="members" className="form-control" aria-describedby="emailHelp" value={members} onChange={(e) => { setmembers(e.target.value) }} placeholder="Enter No. Members" />
                </div>
                <button type="submit" className="btn-sm btn-success my-3">Submit</button>
            </form>
        </div>
    )
}
