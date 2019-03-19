import React, {Component} from 'react';
import Todos from "../components/Todos";
import {connect} from "react-redux";

class TodosContainer extends Component {
    handleChange = (e) => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        const { input, TodoActions } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }

    handleToggle = (id) => {
        // 삭제선 켜고 끄기
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }

    handleRemove = (id) => {
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    }

    render() {
        const {todos, input} = this.props;
        const {handleInsert, handleToggle, handleRemove, handleChange } = this.props;

        return (
            <Todos
                todos={todos}
                input={input}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
                onChange={handleChange}
            />
        );
    }
}

export default connect({
    // state를 비구조화 할당함
})(TodosContainer);
// 리덕스와 연동된 컨테이너 컴포넌트 작성
