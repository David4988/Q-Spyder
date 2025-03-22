
interface Param{
    Name: string,
    Age: number,
    Skills?: string[] | string,
    Hobbies: null,
    FavGames:  string[] | string,
    KnownLang: undefined,
    Addr:  string[] | string,
    play:() => "I am playing",
    sleep: () => "I am sleeping"
}

interface param{
    name: string,
    age: number,
    skills?: string[] | string,
    hobbies:  null,
    favGames:  string[] | string,
    knownLang:  undefined,
    addr:  string[] | string,
    play:() => "I am playing",
    sleep: () => "I am sleeping"
}

const Info = (props:param) => {
    const person:Param = {
        Name:props.name,
        Age:props.age,
        Skills: props.skills,
        Hobbies: props.hobbies,
        FavGames: props.favGames,
        KnownLang:props.knownLang,
        Addr: props.addr,
        
        play:props.play,
        sleep:props.sleep,
    }
  return (
    
    <div className="flex flex-col gap-7 p-10">
        <h1 className='text-4xl font-semibold'>Info</h1>
        <h1>Name: {person.Name}</h1>
        <h1>Age: {person.Age}</h1>
        <h1>Skills: {person.Skills}</h1>
        <h1>Hobbies: {person.Hobbies}</h1>
        <h1>FavGames: {person.FavGames}</h1>
        <h1>KnownLang: {person.KnownLang}</h1>
        <h1>Addr: {person.Addr}</h1>
        <h1>play: {person.play()}</h1>
        <h1>sleep: {person.sleep()}</h1>
    </div>
  )
}

export default Info