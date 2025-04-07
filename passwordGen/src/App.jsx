import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className='text-4xl text-center text-white mb-6'>Password Generator</h1>
      
      <div className="bg-gray-700 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-4">
          <input 
            type="text"
            value={password}
            className="w-full p-2 rounded-l bg-gray-600 text-white"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className={`px-4 py-2 rounded-r ${copied ? 'bg-green-500' : 'bg-blue-500'} text-white`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-white mb-1">
            <label>Password Length: {length}</label>
          </div>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={numAllowed}
            onChange={() => setNumAllowed(prev => !prev)}
            className="mr-2"
          />
          <label htmlFor="includeNumbers" className="text-white">Include Numbers</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeSpecialChars"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
            className="mr-2"
          />
          <label htmlFor="includeSpecialChars" className="text-white">Include Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
