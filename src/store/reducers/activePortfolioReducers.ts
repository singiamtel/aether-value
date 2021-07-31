type ActionType = {
    type: string,
    activePortfolio?: number
    index: number
}

const reducer = (state = [0,0,0,0,0,0,0,0,0,0], action:ActionType) =>{   
    switch (action.type){
        case "update":
            if(action.activePortfolio != undefined)
                state[action.index] = action.activePortfolio
            return state

        default:
            return state
    }

}

export default reducer;