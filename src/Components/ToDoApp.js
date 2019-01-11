import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {onAdd, onRemove} from "../Actions";

const mapStateToProps = (state) => {

    return{
        title: state.title,
        body: state.body,
        date: state.date,
        isDone: state.isDone
    }
};

const mapDispatchToProps = (dispatch) => {

    return{

        onAdd: (summary) => {
            dispatch(onAdd(summary));
        },

        onRemove: (summary) => {
            dispatch(onRemove(summary));
        }
    }
};

const ToDoApp = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoApp; 