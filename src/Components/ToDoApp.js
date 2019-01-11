import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {onAdd, onRemove} from "../Actions";

const mapStateToProps = (state, ownProps) => {

    return{
        title: state.title,
        body: state.body,
        date: state.date,
        isDone: state.isDone
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return{

        onAdd: ()=>{
            dispatch(onAdd());
        },

        onRemove: () => {
            dispatch(onRemove());
        }
    }
};

const ToDoApp = connect((mapStatetoProps,mapDispatchToProps)(ToDoList);

export default ToDoApp; 