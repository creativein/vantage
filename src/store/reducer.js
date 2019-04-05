/**
 * reducer
 */

import * as actionTypes from './action';

 const initialState = {
    compressorStatus: {
        temperature:10,
        pressure:40,
        isRunning: true
    },
    engineStatus:{
        engineHours: 71615,
        oilPressure:40,
        engineSpeed:30
    },
    envHealth:{
        intTemp:0,
        gasTemp:0,
        emgStop:0
    }
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
           
        default:
            return state;
    }
};
export default reducer;