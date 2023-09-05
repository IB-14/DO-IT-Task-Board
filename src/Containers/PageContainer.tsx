import * as React from 'react';
import TaskList from '../Pages/TaskList';
import { Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage';
import AboutUs from '../Pages/AboutUs';

const PageContainer: React.FunctionComponent = () => {
  return (
    <div className='page-container w-100'>
        <Routes>
            <Route 
                path='/' 
                element = {<HomePage />} 
            />
            <Route 
                path='/tasklist' 
                element = {<TaskList />} 
            />
            <Route 
                path='/aboutus' 
                element = {<AboutUs />} 
            />
        </Routes>
    </div>
  );
};

export default PageContainer;
