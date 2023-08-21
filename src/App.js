import './styles/App.css';
import Sidebar from './component/Sidebar/Sidebar';
import UserChat from './component/Chat/UserChat';
import socket from './middleware/socket';

function App() {

  socket.on('user connected',({username})=>{
    console.log(username)
  })
  socket.on('users',({users})=>{
    console.log(users)
  })

  return (
    <section className='flex'>
      <Sidebar />
      <UserChat />
    </section>
  );
}

export default App;
