import React from 'react';
import './styles/App.css';
import Sidebar from './component/Sidebar/Sidebar';
import UserChat from './component/Chat/UserChat';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserSelectedProvider } from './userSelected';

const queryClient = new QueryClient();

function App() {
  return (
    <section className='flex'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <UserSelectedProvider>
          <Sidebar />
          <UserChat />
        </UserSelectedProvider>
      </QueryClientProvider>
    </section>
  );
}

export default App;
