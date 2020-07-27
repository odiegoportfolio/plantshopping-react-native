import {SET_PLANT} from "./types";

export const setPlant = (plant) => (
    {
        type: SET_PLANT,
        data: plant
    }
);


