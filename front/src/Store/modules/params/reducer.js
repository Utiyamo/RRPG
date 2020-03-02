const parameters = {
    LOGON: false
}

export default function params(state = new parameters, action){
    switch(action.type){
        case 'ALTER_LOGON':
            state.LOGON = action.logon;
            return state;

        case 'START_PARAMS':
            return state;

        default:
            return state;
    }
}