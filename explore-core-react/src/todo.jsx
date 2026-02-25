// export default function ToDo({task}){

//     return(
//         <li>Task: {task}</li>
//     )

// }

// export default function ToDo({ task, isDone , time = 0}) {
//   if (isDone) {
//     return <li>Done: {task} Duration: {time} min</li>;
//   } else {
//     return <li>Do Now: {task} Duration: {time} min </li>;
//   }
// }



// export default function ToDo({ task, isDone , time = 0}) {
  
//     return  isDone ? <li>Done: {task} Duration: {time} min</li> :    <li>Do Now: {task} Duration: {time} min </li>;
  
// }

// export default function ToDo({ task, isDone , time = 0}) {
  
//     return  isDone && <li>Done: {task} Duration: {time} min</li> ;
  
// }

// export default function ToDo({ task, isDone , time = 0}) {
  
//     return  isDone || <li> Not Done: {task} Duration: {time} min</li> ;
  
// }


export default function ToDo({ task, isDone , time = 0}) {
  const displayTime = time ? time : 100;
  let lsitItem ;
  
    if (isDone) {
    lsitItem = <li>Done: {task} Duration: {time ? `I am Done in ${time} min` : 'Not done yet'} </li>;
  } else {
    lsitItem = <li>Do Now: {task} Duration: {time} min </li>;
  }
  return lsitItem;
}
