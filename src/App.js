import './styles/App.css';
import Sidebar from './component/Sidebar/Sidebar';
import UserChat from './component/Chat/UserChat';

function App() {

  return (
    <section className='flex'>
      <Sidebar />
      <UserChat />
    </section>
  );
}

export default App;
