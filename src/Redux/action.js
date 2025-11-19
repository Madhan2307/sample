export const addNumber =(value)=>({
    type :"ADD",
    payload : value,
})

export const subNumber =(value)=>({
    type :"SUBRACT",
    payload :value,
})

export const multiplyNumber =(value)=>({
    type :"MULTIPLY",
    payload :value,
})

export const divideNumber =( value)=>({
    type :"DIVIDE",
    payload :value,
})

export const modulusNumber =( value)=>({
    type :"MODULUS",
    payload :value
})