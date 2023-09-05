import { ReactNode, useEffect, useState } from 'react';
import PlusIcon from '../assets/Icons/PlusIcon';
import AddTaskForm from '../Components/AddTaskForm';
import Modal from '../Components/Modal';
import TaskListItem from '../Components/TaskListItem';
import TaskListItemInterface from '../Interfaces/TaskListItem.Interface';

const TaskList: React.FunctionComponent = () => {

  const [modalStatus, setModalStatus] = useState(false);
  const [taskList, setTaskList] = useState<TaskListItemInterface[]>([]);

  useEffect(() => {
    let savedTaskList = JSON.parse(localStorage.getItem('TASK_LIST') || '{}')
    if(savedTaskList) {
      setTaskList(savedTaskList);
    }
  },[])

  const updateTaskList = (taskListItem : TaskListItemInterface) => {
    let updatedTaskList = [...taskList];
    updatedTaskList.push(taskListItem);
    setTaskList(updatedTaskList);
    localStorage.setItem('TASK_LIST', JSON.stringify(updatedTaskList));
  }

  const addTask = (text: string, deadline: string, priority: string) => {
    const taskListItem: TaskListItemInterface = {
      id: taskList.length,
      text: text,
      isComplete: false,
      deadline: deadline,
      priority: priority
    }
    updateTaskList(taskListItem);
    toggleModalStatus();
  }

  const toggleModalStatus = () => {
    setModalStatus(!modalStatus);
  };

  const findItemIndex = (id : number) : number => {
    for(let i=0; i<taskList.length; i++) {
      if(taskList[i].id === id) return i;
    }
    return -1;
  }

  const deleteTask = (id : number) => {
    const taskItemIndex = findItemIndex(id);
    let reducedTaskList = [...taskList];
    reducedTaskList.splice(taskItemIndex, 1);
    setTaskList(reducedTaskList);
    localStorage.setItem('TASK_LIST', JSON.stringify(reducedTaskList));
  }

  const getTaskListItem = (taskItem : TaskListItemInterface, _id: number) : ReactNode => {
    return (
            <TaskListItem 
                id = { taskItem.id } 
                text = { taskItem.text } 
                isComplete = { taskItem.isComplete } 
                priority = { taskItem.priority } 
                deadline = { taskItem.deadline } 
                deleteTask = { deleteTask }
                key = { _id }
            />
    )
  }

  const ActiveTaskView = () => {
    return (
      <div className='active-task-wrapper'>
        <div className='border-headline'>
          <span className='page-heading'>Tasks</span>
        </div>
        <AddTaskButton />
        <div className='task-list-container flex flex-d-column gap-2'>
          {
            taskList.map((taskItem, id) => {
              return getTaskListItem(taskItem, id);
            })
          }
        </div>
      </div>
    )
  }

  const NoTasksView = () => {
    return (
      <div className='no-task-wrapper'>
        <span className='page-heading'>
          Get Started
        </span>
        <span className='page-subheading'>
          Harness the Power of DO IT! Task Board Today
        </span>
        <AddTaskButton />
      </div>
    )
  }

  const AddTaskButton = () => {
    return (
      <div className="task-button-wrapper">
         <div className="task-button align-items-center" onClick={toggleModalStatus}>
            <div className="icon">
              <PlusIcon />
            </div>
            <span>Add Task</span>
         </div>
      </div>
    )
  }

  const TaskView = () => {
    return taskList.length === 0 ? <NoTasksView /> : <ActiveTaskView />
  }

  return (
    <div className='task-container flex flex-d-column justify-content-space-between gap-2'>

      <Modal isOpen={modalStatus} toggle={toggleModalStatus}>
        <AddTaskForm addTask = {addTask} />
      </Modal>

      <TaskView />

    </div>
  );
};

export default TaskList;
