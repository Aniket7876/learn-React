import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl bg-red-500">Hello World</h1>
    </>
  );
}

export default App;
