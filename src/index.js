import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</React.StrictMode>
	</QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/* {todos.map((todo, index) => {
					return (
						<li key={todo.id} id={todo.id}>
							{index + 1}: {todo.text}
							<input
								className="edit text"
								type="text"
								onChange={(Event) => {
									const modifiedArry = [...modify];
									modifiedArry[index] = Event.target.value;
									setModify(modifiedArry);
								}}
								value={modify[index]}
							></input>
							<button className="edit" onClick={modifyText}>
								modify
							</button>
							<button className="edit">supprimer</button>
						</li>
					);
				})} */}