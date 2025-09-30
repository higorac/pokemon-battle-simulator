import { useState } from 'react'
import './App.module.css'
import BattleScreen from './components/BattleScreen/BattleScreen'
import style from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className={style.mainContainer}>
        <BattleScreen></BattleScreen>
      </main>
    </>
  )
}

export default App
