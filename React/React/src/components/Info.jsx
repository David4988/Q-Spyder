import React from "react";


const Info = (props) => {
    console.log(props) //The arguments are passed as a single object
    const person = {
        Name:props.name,
        Age:props.age,
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
    );
};

export default Info