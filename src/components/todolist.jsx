import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

function Todolist() {
	const [edit, setEdit] = useState(false);
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");
	const [modify, setModify] = useState([]);

	const testFn = () => {
		return null;
	};

	const queryClient = useQueryClient();
	const query = useQuery({
		queryKey: ["todos"],
		queryFn: testFn,
	});

	useEffect(() => {
		setTodos(todos);
	}, [todos]);

	function addItem(e) {
		e.preventDefault();
		setTodos(input);
		console.log("LIST", todos);
		if (input.trim() !== "") {
			const newTodo = {
				id: Date.now(),
				text: input,
			};
			setTodos([...todos, newTodo]);
			setInput("");
			queryClient.setQueryData(["todos"], [...todos, newTodo]);
		}
		modify.push("");
		console.log(modify);
	}

	function editTodo() {
		var editButton = document.getElementsByClassName("edit");
		var li = document.querySelectorAll("li");
		var input = document.querySelectorAll("input.text");
		var liValue = [];
		if (edit === true) {
			Array.from(li).map((li) => {
				liValue.push(li.innerText);
			});
			console.log(editButton);
			console.log(li);
			console.log("test");
			Array.from(editButton).map((edit, index) => {
				edit.style.display = "block";
			});
			Array.from(input).map((input, index) => {
				input.style.display = "block";
				input.value = liValue[index];
				console.log(input.value);
			});
			console.log(liValue);

			Array.from(li).map((listItem) => {
				listItem.value = input.value;
			});

			setEdit(false);
		} else {
			Array.from(editButton).map((edit, index) => {
				edit.style.display = "none";
			});
			setEdit(true);
		}
	}

	function modifyText(event) {
		if (modify !== "") {
			setModify(modify);
			var clickedId = parseInt(event.target.parentNode.id);
			var idArray = [];
			todos.map((todo) => {
				idArray.push(todo.id);
				var i = 0;
				if (clickedId === todo.id) {
					setTodos(
						todos.map((todo) => {
							if (clickedId === todo.id) {
								return { ...todo, text: modify };
							}
							return todo;
						})
					);
				}
			});
		}
	}

	// function updateText(event, text, todoId) {
	// 	todos.map((todo) => {
	// 		if (parseInt(event.target.id) === todo.id) console.log(todo, event);
	// 	});
	// 	mutation.mutate({ todoId, text: modify });
	// }

	// const mutation = useMutation((updatedText, event) => {
	// 	return setModify((prevTodos) => {
	// 		return prevTodos.map((todo) => {
	// 			if (parseInt(event.target.id) === todo.id)
	// 				return { ...todo, text: updatedText.text };
	// 			return todo;
	// 		});
	// 	});
	// });

	return (
		<main>
			<button onClick={editTodo}>edit</button>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={todo.id} id={todo.id}>
							{index + 1}: {todo.text}
							<input
								className="edit text"
								type="text"
								onChange={(Event) => {
									const modifiedArray = [...modify];
									modifiedArray[index] = Event.target.value;
									setModify(modifiedArray);
								}}
								value={modify[index]}
							></input>
							<button className="edit" onClick={modifyText}>
								modify
							</button>
							<button className="edit">supprimer</button>
						</li>
					);
				})}
			</ul>
			<form>
				<label htmlFor="add">
					type text
					<input
						type="text"
						name="addIten"
						id="addItem"
						placeholder="add todo item"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</label>
				<button onClick={addItem}>add</button>
			</form>
		</main>
	);
}

export default Todolist;
