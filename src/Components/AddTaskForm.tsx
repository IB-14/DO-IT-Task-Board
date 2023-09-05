import { useState } from 'react';
import AddTaskFormProps from '../Interfaces/AddTaskFormProps.Interface';

const AddTaskForm: React.FunctionComponent<AddTaskFormProps> = (props) => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');

    const updateTaskDesc = (taskDesc : string) : void => {
        setTask(taskDesc);
    }

    const updateDeadline = (deadline : string) : void => {
        setDeadline(deadline);
    }

    const togglePriority = (priority : string) : void => {
        setSelectedPriority(priority);
    }

    const getActiveLabelClass = (priority: string) : string => {
        return priority === selectedPriority ? 'active-priority-label' : '';
    }

    return (
        <div className='form-container flex flex-d-column justify-coontent-space-between'>
            <span className='page-subheading font-wt-500'>
                Add a Task
            </span>
            <div className='form-input-wrapper'>
                <input className='form-text-input' type='text' placeholder='Task Description' onChange={(e) => updateTaskDesc(e.target.value)}/>
            </div>
            <div className='form-input-wrapper'>
                <span className='form-label'>Set Deadline</span>
                <input className='form-text-input form-date-time-input' type='text' placeholder='Pick Date and Time' 
                    onChange={(e) => updateDeadline(e.target.value)}
                    onFocus={(e) => (e.target.type = "datetime-local")}
                    onBlur={(e) => (e.target.type = "datetime-local")}
                />
            </div>
            <div className='form-input-wrapper'>
                <span className='form-label'>Select Priority Level</span>
                <div className='priority-selector-wrapper'>
                    <div className={`priority-label high-priority ${getActiveLabelClass('high')}`}
                        onClick={() => togglePriority('high')}
                    >
                        High
                    </div>
                    <div className={`priority-label medium-priority ${getActiveLabelClass('medium')}`}
                        onClick={() => togglePriority('medium')}
                    >
                        Medium
                    </div>
                    <div className={`priority-label low-priority ${getActiveLabelClass('low')}`}
                        onClick={() => togglePriority('low')}
                    >
                        Low
                    </div>
                </div>
            </div>
            <div className='form-submit-wrapper'>
                <div className='form-submit-button' onClick={() => props.addTask(task, deadline, selectedPriority)}>Add</div>
            </div>
        </div>
    );
};

export default AddTaskForm;
