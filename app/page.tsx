import Image from 'next/image'
import AddTask from './components/AddTask'
import ToDoList from './components/ToDoList'
import { getAllTodos } from '@/api'

export default async function Home() {
    const tasks = await getAllTodos();

    return (
    <main className='max-w-xl mx-auto mt-4'>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className='text-2xl font-bold'>To Do List </h1>
        <AddTask />
        
      </div>
      <ToDoList tasks={tasks} />
    </main>
  )
}
