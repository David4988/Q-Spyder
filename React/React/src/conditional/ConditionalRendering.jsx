import React from 'react'

const ConditionalRendering = () => {
    let age=19
    let score = 49
    // if(age>= 18){ //! We have to write redundant code, may cause errors

    //     return (
    //         <>
    //             <div>Checking Eligibility to Vote</div>
    //             <div>Eligible to Vote</div>
    //         </>
    //     )
    // }else{
    //     return(
    //         <>
    //             <div>Checking Eligibility to Vote</div>
    //             <div>Not Eligible to Vote</div>
    //         </>
    //     )
    // }
    return(
        <>
            <h2>Checking Eligibility to Vote</h2>
            {/* <h2>You are {(age>=18)?"Eligible":"Not Eligible"} to Vote</h2> */}
            {/* <h2>{(age>18)?"": "Not"} Eligible to vote</h2> */}
            <h2>{age< 18 && "Not"} Eligible to Vote</h2> //? Short Circuit "And" Operator
            <h2>Score - {score}</h2>
            <h2>{score>50 && "You Win"}</h2>
        </>
    )

}

export default ConditionalRendering