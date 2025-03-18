import React from 'react'
import Info from './Info'

const Main = () => {
    const Person = {
    Name:`Davidson`,
    Age:20,
    Hobbies: null,
    FavGames: [`Genshin`, `Zenless Zone Zero`, `Honkai Star Rail`, `Honkai Impact 3`,`Sekiro`, `Ghost of Tsushima`],
    KnownLang:undefined,
    Addr: [
                 `17`,
                 `Vasantham Apts`,
                 `Chennai`,
                 `TamilNadu`,
    ],
    eat: () => "He is eating" as const,
    play: () => "I am playing" as const,
    sleep:()=> "I am sleeping" as const,
    }
  return (
    <div>
      <Info 
        name={Person.Name} 
        age={Person.Age} 
        hobbies={Person.Hobbies} 
        favGames={Person.FavGames} 
        knownLang={Person.KnownLang} 
        addr={Person.Addr} 
        play={Person.play} 
        sleep={Person.sleep} 
      />
    </div>
  )
}

export default Main