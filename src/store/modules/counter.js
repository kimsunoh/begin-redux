import {createAction, handleActions} from "redux-actions";

/* action */
const INCREMENT = 'const/INCREMENT';
const DECREMENT = 'const/DECREMENT';

//export const increment = () => ({type:INCREMENT});
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈 state의 초기 상태값
const initialState = {
    number: 0
};

/* reducer */
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case INCREMENT:
//             return {number: state.number + 1 };
//         case DECREMENT:
//             return {number: state.number - 1 };
//         default:
//             return state;
//
//     }
// }

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체
// 두번째 파라미터는 초기 상태이다
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1 };
    },
    // action 객체를 참조하지 않으므로, state 부분에서 number를 비구조화 할당해서 코드를 간소화 할 수 있다
    [DECREMENT]: ({ number }) => ({number: number -1 })
}, initialState);
