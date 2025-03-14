
const throwError = (msg:string): never => {
    throw new Error(msg)
}
/**
 * Loops indefinitely, never returning. Useful for situations where you
 * want to make it explicit that a function never returns normally.
 * @returns {never} - never returns
 */
const infiniteLoop = ():never => {
    while(true) {}
}

const neverReturns = ():never => {
    while(true){}
}

let x:never = neverReturns()