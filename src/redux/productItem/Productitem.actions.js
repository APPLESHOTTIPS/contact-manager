export const INCR_QTY = "INCR_QTY";
export const DECR_QTY = "DECR_QTY";

export const incrQty = ()=>{
    return {type : INCR_QTY};
};
export const decrQty = ()=>{
    return {type : DECR_QTY };
};