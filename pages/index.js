import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CardView from "../components/cardView";
export default function Home() {
	const [state, setState] = useState({
		data: [],
	});
	async function fetchData() {
		const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
		setState({ data: data.data });
		console.log(state.data, "json data");
	}

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<h1 className="text-3xl text-center font-bold">Comments Manager App</h1>
			<div style={{ margin: "20px" }} class="grid grid-cols-4 gap-4 mobile-card">
				{state.data.map((o, key) => {
					return <CardView data={o} />;
				})}
			</div>
		</div>
	);
}
