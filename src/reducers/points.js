import {
    POINT_ADDED,
    POINTS_LOADED,
    POINTS_RECALCULATED,
    UPDATE_FIELD_POINT,
    UPDATE_WITH_MESSAGE
} from '../constants/actionTypes';

export default (state={'rc':1, 'yc':0, 'xc':0}, action) => { //added default radius and y
    switch (action.type) {
        case UPDATE_FIELD_POINT: {
            var message = '';
            if ((action.key=='yc' && (parseFloat(action.value) <= -3 || parseFloat(action.value) >= 3 || !(!isNaN( Number(action.value) ) && String(action.value).lastIndexOf('.') != (action.value.length - 1)))) || ((parseFloat(state.yc) <= -3 || parseFloat(state.yc) >=3 || !(!isNaN( Number(state.yc) ) && String(state.yc).lastIndexOf('.') != (state.yc.length - 1))) && action.key!='yc')) {
                
                //alert(action.key + ' ' + action.value);
                message += 'Y must be number in (3;3). ';
            }
            if ((action.key=='rc' && parseInt(action.value) <= 0) || (parseInt(state.rc) <= 0 && action.key!='rc')) {
                //alert(action.key + ' ' + action.value);
                message += 'R must be number greater than 0. '
                if (action.key=='rc') {
                    action.value = 0;
                }
            }
            return { ...state, [action.key]: action.value, message };
        }
        case UPDATE_WITH_MESSAGE:
            return {
                ...state,
                message: action.message,
                [action.key]: action.value
            }
        case POINT_ADDED:
            return {
                ...state,
                point: action.payload
            };
        case POINTS_LOADED:
            return {
                ...state,
                points: action.payload,
            };
        case POINTS_RECALCULATED:
            return {
                ...state,
                points_r: action.payload,
                current_r: action.r
            };
        default:
            return state;
    }
};

