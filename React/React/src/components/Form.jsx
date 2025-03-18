import React from 'react'
import Info from './Info'
import PropsChildren from './PropsChildren'
const Form = () => {
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
    eat: () => `He is eating`,
    play:() => `Playing ZZZ`,
    sleep:()=> `He is sleeping`,
    }
  return (
    <>
            <form action="" className=' p-10'>
            <h1 className='text-3xl font-semibold'>Form</h1>
                <fieldset className='flex gap-4 py-5'>
                    <label htmlFor="name" className='text-lg' >Enter you Name</label>
                    <input type="text" className='border rounded-sm' /><br></br>
                    <label htmlFor="name" className='text-lg'>Enter you Age</label>
                    <input type="number" className='border rounded-sm'/>
                </fieldset>
            </form>
            <Info name = {Person.Name} age={Person.Age} hobbies={Person.Hobbies} favGames={Person.FavGames} knownLang={Person.KnownLang} addr={Person.Addr} eat={Person.eat} play={Person.play} sleep={Person.sleep}/>
            
            {/* <Info name = {"Davidson"} age={20}/>
            <Info name = {"Usopp"} age={20}/> */}
            <h1>Props Children</h1>
            <PropsChildren>{<Info name = {"Usopp"} age={Person.Age} hobbies={Person.Hobbies} favGames={Person.FavGames} knownLang={Person.KnownLang} addr={Person.Addr} eat={Person.eat} play={Person.play} sleep={Person.sleep}/>}</PropsChildren>
        </>
  )
}

export default Form