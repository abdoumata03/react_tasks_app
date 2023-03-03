import { useState } from 'react'
import CustomForm from './components/CustomForm'


function App() {


  const AddTask = (task) => {
      console.log(task);
  }

  return (

    
    <div className='bg-primary h-screen overflow-hidden flex justify-center items-center'>
        
        <CustomForm addTask={AddTask}/>
    </div>
  )
}

export default App
