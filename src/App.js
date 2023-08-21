import './styles/App.css';
import Sidebar from './component/Sidebar/Sidebar';
import UserChat from './component/Chat/UserChat';
import { useState } from 'react';
import Addpeople from './component/GroupCreation/Addpeople';
import Addcontact from './component/Sidebar/Addcontact';

function App( ) {
  const [show, setshow] = useState(false);
  return (
    <section className='flex'>
      <Sidebar setshow={setshow} />
      <UserChat />
      { show && <div className='fixed inset-0 w-100rem bg-black bg-opacity-50 z-50 flex justify-center items-center'>
              <Addpeople setshow={setshow} show={show}/>
              
          </div>
    }
    </section>
  );
}

export default App;
