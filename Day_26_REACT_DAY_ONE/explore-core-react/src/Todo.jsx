// export default function ToDo({task,isDone}){
//     return(
//         <li>Todo Task {task}</li>
//     )
// }

// export default function ToDo({task,isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>pending: {task}</li>
//     }
// }

//conditional rendering: 3 ternary

// export default function ToDo ({task,isDone,time=0}){
//     return isDone ? <li>Done: {task} time: {time}</li> : <li>Not Done: {task}</li>
// }

//conditional rendering: 4 &&

// export default function ToDo ({task,isDone,time=0}){
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }


//conditional rendering: 5 &&

// export default function ToDo ({task,isDone,time=0}){
//     return isDone || <li>Not Done Tasks: {task} time: {time}</li>
// }


//conditional rendering: 6 user variable
export default function ToDo({task,isDone}){

    let listItem;

    if(isDone === true){
        listItem =  <li>Done: {task}</li>;
    }
    else{
        listItem =  <li>pending: {task}</li>
    }
    return listItem;
}