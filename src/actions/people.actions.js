import { peopleConstants } from '../constants';
import { peopleService } from '../services';
import { alertActions } from '.';

export const peopleActions = {
    getPeople
};

function getPeople() {
    return dispatch => {
        peopleService.getPeople()
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    console.error(error);
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function success(data) { return { type: peopleConstants.GET_ALL_PEOPLE_SUCCESS, people: data } }
    function failure(error) { return { type: peopleConstants.GET_ALL_PEOPLE_ERROR, error } }
}