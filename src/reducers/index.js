import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { people } from './people.reducer';


const rootReducer = combineReducers({
    authentication,
    alert,
    people
});

export default rootReducer;