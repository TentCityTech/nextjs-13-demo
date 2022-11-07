import Link from 'next/link'
import React from 'react'
import { Todo } from '../../../typings'
import { Dancing_Script } from '@next/font/google'

const dancingScript = Dancing_Script({ weight: '400' })

const fetchTodos = async () => {
  // timeout for random # of seconds between 1&5
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000
  await new Promise((resolve) => setTimeout(resolve, timeout))

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await res.json()
  return todos
}

async function TodosList() {
  const todos = await fetchTodos()
  return (
    <div>
      <h2 className='text-lg'>All Todo{"'"}s</h2>
      <div className='flex-col space-y-2'>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className='bg-blue-400 text-white hover:bg-blue-600 px-2 py-1 rounded-sm'
          >
            <Link
              href={`/todos/${todo.id}`}
              className={dancingScript.className}
            >
              Todo: {todo.id}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodosList
