import '#app/app.scss'

import { StrictMode } from 'react'
import { Route, Routes, StaticRouter } from 'react-router'

import { Home } from '#app/pages/home'

export function App(props?: { url?: string }) {
  return (
    <StrictMode>
      <StaticRouter location={props.url}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StaticRouter>
    </StrictMode>
  )
}

export function createApp(url?: string) {
  return <App url={url} />
}
