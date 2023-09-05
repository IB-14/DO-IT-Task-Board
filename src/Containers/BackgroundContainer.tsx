import Navbar from '../Components/Navbar'
import PageContainer from './PageContainer';

export default function App () {
  return (
    <div className='w-100 flex flex-d-column justify-content-space-between align-items-center'>
      <Navbar />
      <PageContainer />
    </div>
  );
}
