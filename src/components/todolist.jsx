import { useState, useEffect } from "react";

function Todolist() {
	// const [unorderedList, setUnorderedList] = useState(0);
	const [button, setButton] = useState(false);
	const [edit, setEdit] = useState(false);
	const [todos, setTodos] = useState([]);
	const [classRemove, setClassRemove] = useState(false);

	const [input, setInput] = useState("");
	useEffect(() => {
		setButton(true);
	}, [button]);

	useEffect(() => {
		setTodos(todos);
		// setInput(input);
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
		}
	}

	function editTodo() {
		var deleteButton = document.getElementsByClassName("delete");
		var li = document.querySelectorAll("li");
		var input = document.querySelectorAll("input.editText");
		var liValue = [];
		if (edit === true) {
			Array.from(li).map((li) => {
				liValue.push(li.innerText);
			});
			Array.from(input).map((input, index) => {
				input.style.display = "block";
				input.value = liValue[index];
			});

			Array.from(deleteButton).map((del) => {
				del.style.display = "block";
			});
			setEdit(false);
		} else {
			Array.from(deleteButton).map((del) => {
				del.style.display = "none";
			});

			Array.from(input).map((input) => {
				input.style.display = "none";
			});
			setEdit(true);
		}
	}

	return (
		<main>
			<button onClick={editTodo}>edit</button>
			<ul>
				{todos.map((todo, index) => {
					return (
						<li key={todo.id}>
							{index + 1}: {todo.text}
							<input className="editText" type="text"></input>
							<button className="delete">supprimer</button>
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
