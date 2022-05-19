 export default function productReducer(state = [],action){
    switch(action.type){
        case "ADD_Product":
            state = state.concat(action.comment);
            return state;
            case "DELETE_PRODUCT":
                state = state.filter((comment)=> comment.id !== action.id);
            return state;
            case "FETCH_PRODUCT":
                return action.comments;
                default:
                return  state;
                
    }

}