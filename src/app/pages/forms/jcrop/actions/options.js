

import {TOGGLE_OPTION, SET_OPTIONS} from '../constatnts/actionTypes'

export const toggleOption = (option) => ({
    type: TOGGLE_OPTION,
    option
});
export const setOptions = (options) => ({
    type: SET_OPTIONS,
    options
});
