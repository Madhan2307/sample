import { combineReducers } from "redux"


const initialAddstate ={
    result : 0 ,
}

const addReducer=(state=initialAddstate,action)=>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result:state.result + action.payload,
            }
            default:
                return state
    }
}

const initialSubstate ={
    result : 0 ,
}

const subReducer=(state=initialSubstate,action)=>{
    switch(action.type){
        case 'SUBRACT':
            return{
                ...state,
                result:state.result - action.payload,
            }
            default:
                return state
    }
}

const initialMultistate ={
    result : 5 ,
}

const multiReducer=(state=initialMultistate,action)=>{
    switch(action.type){
        case 'MULTIPLY':
            return{
                ...state,
                result:state.result * action.payload,
            }
            default:
                return state
    }
}
const initialDividestate ={
    result : 5 ,
}

const divideReducer=(state=initialDividestate,action)=>{
    switch(action.type){
        case 'DIVIDE':
            return{
                ...state,
                result:state.result / action.payload,
            }
            default:
                return state
    }
}

const initialModstate ={
    result : 5 ,
}

const modReducer=(state=initialModstate,action)=>{
    switch(action.type){
        case 'MODULUS':
            return{
                ...state,
                result:state.result % action.payload,
            }
            default:
                return state
    }
}

const rootReducer = combineReducers({
    add : addReducer,
    Subtract : subReducer,
    multiply : multiReducer ,
    divide : divideReducer ,
    modulus :modReducer,

})


export default rootReducer