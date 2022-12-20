import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "../recoil/atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>Todo</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
