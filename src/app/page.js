import { TodoCard } from "@/components/todo.card";
import { TodoCreate } from "@/components/todo.create";

async function getTodos() {
  try {
    const res = await fetch("https://v1.appbackend.io/v1/rows/xCsBunhlUDe0", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getTodos();

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl m-5 font-bold">My To-do List</h1>
      </div>
      <div className="grid justify-items-center grid-cols-3 gap-y-4 gap-x-2 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((todo) => {
          return (
            <TodoCard
              key={todo._id}
              id={todo._id}
              title={todo.title}
              content={todo.content}
            />
          );
        })}
      </div>
      <TodoCreate />
    </div>
  );
}
