import { peopleConstants } from '../constants';


export function people(state = {}, action) {
    switch (action.type) {
        case peopleConstants.GET_ALL_PEOPLE_SUCCESS:
            return action.people['data'];
        case peopleConstants.GET_ALL_PEOPLE_ERROR:
            return {};
        default:
            return state
    }
}