import * as React from 'react';
import { useState } from 'react';
import DeleteIcon from '../assets/Icons/DeleteIcon';

interface TaskListItemProps {
  id: number,
  text: string,
  isComplete: boolean,
  deadline: string,
  priority: string
  deleteTask: (id : number) => void;
}

function formateDateTime(dateTimeInput : string) : string {
    const time = dateTimeInput.substring(11, 16);
    const date = formatDate(dateTimeInput.substring(0, 10))
    return time + ", " + date;
}

function formatDate(dateInput : string) {
    let date = new Date(dateInput);

    if(isNaN(date.getTime())) {
        return dateInput;
    } else {
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let day : string | number = date.getDate();
        if(day < 10)
        {
            day = "0"+day;
        }
        return day  + " " +month[date.getMonth()] + " " + date.getFullYear();
    }
}

const TaskListItem: React.FunctionComponent<TaskListItemProps> = (props) => {
    const [isCompleted, markCompleted] = useState(props.isComplete);

    function toggleComplete() {
        markCompleted(!isCompleted);
        console.log(isCompleted);
    }

    const priority = props.priority;
    return (
        <div className='task-list-item flex justify-content-space-between' key={props.id}>
            <div className='flex gap-2 align-items-center'>
                <input type='checkbox' 
                        className={isCompleted ? 'ticked-checkbox' : ''}
                        defaultChecked={isCompleted}
                        onClick={() => toggleComplete}/>
                <span>
                    {props.text}
                </span>
            </div>
            <div className='flex gap-2'>
                <span className='task-deadline'>
                    {formateDateTime(props.deadline)}
                </span>
                <span className={`priority-label ${priority}-priority label justify-content-center`}>
                    {priority}
                </span>
                <div className='task-delete-icon tooltip' onClick={() => props.deleteTask(props.id)}>
                    <span className='tooltip-text'>Delete Task</span>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    );
};

export default TaskListItem;
