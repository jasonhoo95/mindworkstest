import { useEffect, useState } from "react";
import axios from "axios";
export default function Comments() {
	const [state, setState] = useState({
		comments: [],
		title: "",
	});
	const [searchComment, setComment] = useState([]);
	async function fetchComments(id) {
		const data = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);

		setState((prevstate) => ({ ...prevstate, comments: data.data }));
		setComment(data.data);
	}

	const searchComments = async (e) => {
		var comments = [];
		var name = "veronica_Goodwin@timmothy.net";
		setComment([]);

		for (var i = 0; i < state.comments.length; i++) {
			if (
				state.comments[i].name.toLowerCase().match(e.target.value) ||
				state.comments[i].email.toLowerCase().match(e.target.value) ||
				state.comments[i].body.toLowerCase().match(e.target.value)
			) {
				comments.push(state.comments[i]);

				setComment(comments);
			}
		}
	};
	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id = urlParams.get("id");
		setState({ title: urlParams.get("title") });
		fetchComments(id);
	}, []);
	return (
		<div>
			<div style={{ background: "#548696", padding: "10px" }} className="text-center">
				<div>Title:</div>
				<h1 className="font-bold text-2xl">{state.title}</h1>
			</div>
			<div style={{ margin: "20px" }}>
				<div className="input-group-text flex">
					<input
						onChange={(e) => searchComments(e)}
						autocomplete="off"
						name="search"
						id="search"
						placeholder="Search for comments"
						type="text"
						className="search-input"
					/>
					<img alt="search_icon" src="/Search-icon.png" className="searchIcon"></img>
				</div>
				<div className="text-center font-bold">List of Comments:</div>
				{searchComment.map((o, key) => {
					return (
						<div key={key} style={{ padding: "20px", margin: "20px 0px" }} className="card-container card-hover">
							<div style={{ margin: "10px 0px" }}>
								<span className="font-bold">Email:</span> <span className="font-bold">{o.email}</span>
							</div>
							<div style={{ margin: "10px 0px" }}>
								<span className="font-bold">Name:</span> {o.name}
							</div>

							<div style={{ margin: "10px 0px" }}>
								<span className="font-bold">Body:</span> {o.body}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
