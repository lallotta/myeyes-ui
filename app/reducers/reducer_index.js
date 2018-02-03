import { combineReducers } from 'redux';
import ui from './reducer_ui';

const rootReducer = combineReducers({
    interface: ui
});

export default rootReducer;