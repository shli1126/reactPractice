import './App.css';
import React from 'react'
import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doacts apppointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 12:30',
      reminder: true
    }
  ])


  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }



  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== 
    id))
  }


  //Toggle remainder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder:
          !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
