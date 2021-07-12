type ActionType = {
    type: string,
    amount: number
}

const reducer = (state = 0, action:ActionType) =>{   
    switch (action.type){
        case "update":
            state = action.amount
            return state

        default:
            return state;
    }

}

export default reducer;