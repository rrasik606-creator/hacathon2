import React, { useState } from 'react'
import { Search,Plus } from 'lucide-react'

const App = () => {
  const [count,setCount]=useState(null);

  return (
    <div className='flex flex-col items-center p-5 m-5 border max-h-full max-w-full p- '>

      <div className='flex gap-3 justify-center items-center p-[20px]  max-w-fit max-h-full'>
        <h1>FAQ</h1>
        <div className='flex  border rounded-2xl p-1'>
        <input 
        type="text" 
        placeholder='Search...'
        className=' rounded-2xl'
        />
        <Search/>
        </div>
      </div>

      <div>
        <div>
          <div className='flex border rounded-[5px] p-1 gap-2.5 '>
            <h1 className=''>Cretive Business Question</h1>
            <button onClick={()=>{count===null?setCount("div1"):setCount(null)}}><Plus/></button>
          </div>

          <div>
            {count==="div1"?
              (<div>
                <p>rashik</p>
              </div>):
              (<div></div>)
            }
          </div>
        </div>

        <div>
          <div className='flex border rounded-[5px] p-1 gap-2.5 '>
            <h1 className=''>Cretive Business Question</h1>
            <button onClick={()=>{count===null?setCount("div2"):setCount(null)}}><Plus/></button>

          </div>

          <div>
            {count==="div2"?
              (<div>
                <p>my namw</p>
              </div>):
              (<div></div>)
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
