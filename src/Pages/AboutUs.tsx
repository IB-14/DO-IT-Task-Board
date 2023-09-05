import * as React from 'react';
import ToDoListIcon from '../assets/Icons/ToDoListIcon';

const AboutUs: React.FunctionComponent = () => {
  return (
    <div className='about-us-container'>
      <span className='page-heading'>About Us</span>
      <span className='page-subheading'>
        Welcome to the DO IT! Task Board, your go-to task management solution. 
      </span>
      <div className='about-us-content-wrapper'>
        <div className='text-content'>
          <p>
            Our platform is designed to help you seamlessly <b>PLAN</b>, <b>PRIORITIZE</b>, and <b>COMPLETE</b> your tasks, making daily life more organized and efficient. Whether you're a student, a professional, or simply looking to stay on top of your to-do list, our user-friendly application is here to streamline your task management process. Join us today and experience the power of the Do It! Task Board in enhancing your productivity and achieving your goals. <br /><br />Join the Do It! Task Board community today and take the first step towards a more productive and organized life. Start planning, prioritizing, and completing your tasks with ease. Let's work together to make every day a successful one!
          </p>
        </div>
        <div className='image-content flex align-items-center justify-content-center w-100'>
          <ToDoListIcon />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
