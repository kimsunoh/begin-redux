import React, {Component} from 'react';
import Counter from "../components/Counter";
import * as counterActions from 'store/modules/counter';
import {connect} from "react-redux";

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    };

    render() {
        const {handleIncrement,handleDecrement} = this;
        const {number} = this.props;

        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}
// 리덕스와 연동된 컨테이너 컴포넌트 작성

/*
// props 값으로 넣어 줄 상태를 정의해준다
const mapStateToProps = (state) => ({
    number: state.counter.number
});

// props 값으로 넣어 줄 액션 함수들을 정의해준다
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
});
// 컴포넌트를 리덕스와 연동 할 때에는 connect를 사용한다
// connect() 의 결과는 컴포넌트에 props를 넣어주는 함수를 반환하다
// 반환된 함수에 우리가 만든 컴포넌트를 넣어준다
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// mapStateToProps: 스토어의 상태를 파라미터로 받아오는 함수, 컴포넌트에 상태로 넣어줄 props를 반환한다
// mapDispatchToProps: dispatch를 파라미터로 받아오는 함수, 컴포넌트에 넣어줄 액션 함수들을 반환한다
//
// 아래처럼 작성하면 같은 코드지만 깔끔하게 작성 가능하다
* */

export default connect(
    (state) => ({
        number: state.counter.number
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement())
    })
)(CounterContainer);


