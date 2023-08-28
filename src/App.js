import React, { useState } from 'react';
import './styles/App.css';
import Sidebar from './component/Sidebar/Sidebar';
import UserChat from './component/Chat/UserChat';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserSelectedProvider } from './userSelected';
import Addpeople from "../src/component/GroupCreation/Addpeople";

const queryClient = new QueryClient();

function App() {
  const [show, setshow] = useState(false);
  return (
    <section className='flex'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <UserSelectedProvider>
          <Sidebar setshow={setshow}/>
          <UserChat />
          { show && <div className='fixed inset-0 w-100rem bg-black bg-opacity-50 z-50 flex justify-center items-center'>
              <Addpeople setshow={setshow} show={show}/>
              
          </div>
    }
        </UserSelectedProvider>
      </QueryClientProvider>
    </section>
  );
}

export default App;
