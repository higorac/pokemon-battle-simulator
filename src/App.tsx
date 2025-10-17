// import { useState } from 'react'
import './App.module.css'
import BattleScreen from './components/BattleScreen/BattleScreen'
import BattleLog from './components/BattleLog/BattleLog'
import style from './App.module.css'
import AttackPanel from './components/AttackPanel/AttackPanel'
import MoveDescription from './MoveDescription/MoveDescription'
import Controls from './components/Controls /Controls'
import PartyPanel from './components/PartyPanel/PartyPanel'
import { getRandomPokemons } from './services/pokeapi'
import { useEffect, useState } from 'react'

interface Pokemons {
  id: number;
  name: string;
  sprite: string;
}

function App() {

  const [playerParty, setPlayerParty] = useState<Pokemons[]>([]);
  const [enemyParty, setEnemyParty] = useState<Pokemons[]>([]);

  const loadRandomPokemons = async () => {
    const { player, enemy } = await getRandomPokemons();
    setPlayerParty(player);
    setEnemyParty(enemy);
  };  

  useEffect(() => {
    loadRandomPokemons()
  }, [])

  return (
    <>
      <main className={style.mainContainer}>
        <div className={style.leftSide}>
            <BattleScreen>
              <div className={style.screenWrapper}>
                <div className={style.playerParty}>
                  {playerParty.map((pokemon) => (
                    <PartyPanel key={pokemon.id} sprite={pokemon.sprite} name={pokemon.name} />
                  ))}
                </div>
                <div className={style.battleArea}></div>
                <div className={style.enemyParty}>
                  {enemyParty.map((pokemon) => (
                    <PartyPanel key={pokemon.id} sprite={pokemon.sprite} name={pokemon.name} />
                  ))}
                </div>
              </div>
            </BattleScreen>
            <div className={style.panel}>
              <AttackPanel></AttackPanel>
              <MoveDescription></MoveDescription>
              <Controls onRestart={loadRandomPokemons}></Controls>
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
