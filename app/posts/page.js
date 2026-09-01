import Link from "next/link"
import Todo from "../components/todo"
export default async function () {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
            next: {
                revalidate: 120,
            },
        }
    );
    const todo = await response.json();
    return (
        <div>
            <h1
                style={{
                    position: "absolute",
                    top: "-40px",
                    color:"white"
                }}>
                Welcome to Learn Next.js
            </h1>
             <div>
                {todo.title}
                <Todo/>
            </div>
        </div>
    );
}