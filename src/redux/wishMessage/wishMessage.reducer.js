import * as messageAction  from "./wishMessage.action";

export const  messageFeatureKey = "wish-message";

let initialState = {
    message : " Hello "
};
export const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case messageAction.Print_good_morning:
            return {
                message : "GoodMorning"
            };
            case messageAction.Print_good_afternoon:
                return {
                    message : "GoodAfternoon"
                };
            case messageAction.Print_good_evening :
                    return {
                        message : "GoodEvening"
                    };   

              default : return state ;      
    }
}