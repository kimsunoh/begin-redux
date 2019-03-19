import {createAction, handleActions} from "redux-actions";
import { Map, List } from "immutable";

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value); //createAction을 통해 만든 액션생성함수에 파라미터
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

/**
 * actionCreateFunction = createAction(type, payload, meta)
 *
 * 위의 세개를 param으로 넘겨서 생성된 액션생성함수 actionCreateFunction 이 생성된다
 *
 *
 * ex)
 * sample = createAction('SAMPLE', (value) => value*value, (value) => value-1 );
 *
 * action = sample(3);
 * // {type:'SAMPLE', payload: 9, meta: 2}
 */

// reducer
let id = 0; // todo 아이템에 들어갈 고유값

const initialState = Map({
    input: '',
    todos: List()
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.playload),
    [INSERT]: (state, {payload: text}) => {
        const item = Map({id: id++, checked: false, text});
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);
