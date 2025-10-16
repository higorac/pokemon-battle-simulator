// import { useState } from 'react'
import './App.module.css'
import BattleScreen from './components/BattleScreen/BattleScreen'
import BattleLog from './components/BattleLog/BattleLog'
import style from './App.module.css'
import AttackPanel from './components/AttackPanel/AttackPanel'
import MoveDescription from './MoveDescription/MoveDescription'
import Controls from './components/Controls /Controls'
import PartyPanel from './components/PartyPanel/PartyPanel'
import { getPokemonSprites } from './services/pokeapi'
import { useEffect, useState } from 'react'

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

function App() {

  const [playerParty, setPlayerParty] = useState<Pokemon[]>([]);
  const [enemyParty, setEnemyParty] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemonSprites().then(allPokemons => {
      const shuffled = [...allPokemons].sort(() => 0.5 - Math.random());

      setPlayerParty(shuffled.slice(0, 6));
      setEnemyParty(shuffled.slice(6, 12));
    });
  }, []);

  return (
    <>
      <main className={style.mainContainer}>
        <div className={style.leftSide}>
            <BattleScreen>
              <div className={style.screenWrapper}>
                <div className={style.playerParty}>
                  {playerParty.map((pokemon) => (
                    <PartyPanel key={pokemon.id} sprite={pokemon.sprite} />
                  ))}
                </div>
                <div className={style.battleArea}></div>
                <div className={style.enemyParty}>
                  {enemyParty.map((pokemon) => (
                    <PartyPanel key={pokemon.id} sprite={pokemon.sprite} />
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
