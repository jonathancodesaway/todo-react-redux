export const ADD = "ADD";
export const REMOVE = "REMOVE";

//action functions

export const onAdd = (summary) =>{ 

    return{
        type: ADD,
        title: summary.children[0],
        body: summary.children[1],
        date: summary.date,
        isDone: false
    }
}

export const onRemove = () =>{ 
    return{
        type: REMOVE,
        isDone: true
    }
}