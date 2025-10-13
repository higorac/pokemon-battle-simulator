// import { useState } from 'react'
import './App.module.css'
import BattleScreen from './components/BattleScreen/BattleScreen'
import BattleLog from './components/BattleLog/BattleLog'
import style from './App.module.css'
import AttackPanel from './components/AttackPanel/AttackPanel'
import MoveDescription from './MoveDescription/MoveDescription'
import Controls from './components/Controls /Controls'
import PartyPanel from './components/PartyPanel/PartyPanel'
// import { useEffect, useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const party = Array(6).fill(null);

  return (
    <>
      <main className={style.mainContainer}>
        <div className={style.leftSide}>
            <BattleScreen>
              <div className={style.screenWrapper}>
                <div className={style.playerParty}>
                  {party.map((_, index) => (
                    <PartyPanel key={index} />
                  ))} 
                </div>
                <div className={style.battleArea}></div>
                <div className={style.enemyParty}>
                  {party.map((_, index) => (
                    <PartyPanel key={index} />
                  ))} 
                </div>
              </div>
            </BattleScreen>
            <div className={style.panel}>
              <AttackPanel></AttackPanel>
              <MoveDescription></MoveDescription>
              <Controls></Controls>
            </div>
        </div>
          <div className={style.rightSide}>
            <BattleLog></BattleLog>
          </div>
      </main>
    </>
  )
}

export default App
