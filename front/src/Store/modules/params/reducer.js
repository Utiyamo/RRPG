const parameters = {
    LOGON: false,
    baseurl: 'http://localhost:3001'
}

export default function params(state = parameters, action){
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