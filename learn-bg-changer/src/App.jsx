import { useState } from 'react'

function App() {
  const [color, setColor] = useState();



  return (
    <>
      <div className="w-full h-screen duration-900"
      style={{backgroundColor: color}}      
      >
        <div className="fixed flex flex-wrap justify-center bottom-7 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'red'}}
            onClick={() => setColor('red')}
            >Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'green'}}
            onClick={() => setColor('green')}
            >Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'blue'}}
            onClick={() => setColor('blue')}
            >Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'orange'}}
            onClick={() => setColor('orange')}
            >Orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'purple'}}
            onClick={() => setColor('purple')}
            >Purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'pink'}}
            onClick={() => setColor('pink')}
            >Pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'black'}}
            onClick={() => setColor('black')}
            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
