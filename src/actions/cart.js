import {ADD_ITEM, REMOVE_ITEM} from "./types";

export const addItem = (item) => (
    {
        type: ADD_ITEM,
        data: item
    }
);


export const removeItem = (key) => (
    {
        type: REMOVE_ITEM,
        key: item
    }
);
