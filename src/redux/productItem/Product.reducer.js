import * as productActions from "./Productitem.actions";

export const productItemFeatureKey = "product-item";

let initialState = {
    product :{
        sno :'10ANB',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqCj2qlTkW8yO1hiXcDhIn7fMGt7wv832rA&usqp=CAU",
        name: "apple airpods",
        price :22000,
        qty : 1
          
    }
};
export const reducer =(state = initialState,action)=>{
    switch(action.type){
        case productActions.INCR_QTY:
            return {
                product :{
                    ...state.product,
                    qty : state.product.qty+1
                }
            };
            case productActions.INCR_QTY:
            return {
                product :{
                    ...state.product,
                    qty : state.product.qty -1 > 0 ?state.product.qty-1:1
                }
                
            };
            default :return state;
    }
    

}
