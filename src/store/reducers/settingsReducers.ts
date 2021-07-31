type ActionType = {
    type: string,
    value?: number
    index: number
}
/* Cada posición del array representará una opción para el usuario */
/* 0: Dólares por hora usados para el cálculo del Time-Money */
const reducer = (state = [10], action:ActionType) =>{   
    switch (action.type){
        case "update":
            if(action.value != undefined)
                state[action.index] = action.value
            return state

        default:
            return state
    }

}
export default reducer;