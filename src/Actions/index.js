export const ADD = "ADD";
export const REMOVE = "REMOVE";

//action functions

export const onAdd = (summary) =>{ 
    return{
        type: ADD,
        title: summary.title,
        body: summary.body,
        date: summary.date,
        isDone: false
    }
}

export const onAdd = () =>{ 
    return{
        type: REMOVE,
        isDone: true
    }
}