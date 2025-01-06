import '#app/pages/home/styles.scss'

import { useState } from 'react'

import minervaPng from '#app/img/minerva.png'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 text-center">
      <div className="flex justify-center items-center">
        <a href="https://athenna.io" target="_blank" rel="noopener noreferrer">
          <img alt="minerva" className="minerva" src={minervaPng} />
        </a>
      </div>
      <h1 className="font-bold">Athenna + React</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p className="m-2 font-medium">
          Edit <code>src/resources/app/pages/home/index.tsx</code> and save to
          reload.
        </p>
      </div>
    </div>
  )
}
