import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./reducers/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "New Todo",
    };

    dispatch(addTodo(newTodo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Todo List
      </h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>

      <div className="divide-y-2 divide-gray-200">

        {todos.map((todoItem) => (
          <div
            key={todoItem.id}
            className="flex justify-between items-center p-4"
          >

            <span className="text-gray-700">
              {todoItem.text}
            </span>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                handleDeleteTodo(todoItem.id)
              }
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default App;