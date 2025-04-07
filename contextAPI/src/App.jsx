import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline bg-red-500 ">Hello world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
