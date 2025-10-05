// import { useState } from 'react'
import './App.module.css'
import BattleScreen from './components/BattleScreen/BattleScreen'
import BattleLog from './components/BattleLog/BattleLog'
import style from './App.module.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className={style.mainContainer}>
        <div className={style.leftSide}>
            <BattleScreen></BattleScreen>
        </div>
          <div className={style.rightSide}>
            <BattleLog></BattleLog>
          </div>
      </main>
    </>
  )
}

export default App
