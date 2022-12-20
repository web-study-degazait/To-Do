import { IToDo } from "../recoil/atom";

function ToDo({ text }: IToDo) {
  return <li>{text}</li>;
}

export default ToDo;
