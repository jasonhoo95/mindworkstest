export default function CardView({ data }) {
	const directPage = (id) => {
		window.location.href = `/comments?id=${id}&title=${data.title}`;
	};
	return (
		<div onClick={(e) => directPage(data.id)} className="card-container">
			<div className="image-card">
				<img src="/cat.png" />
			</div>
			<div style={{ padding: "10px" }}>
				<h3 className="text-center font-bold">Title:</h3>
				<div className="text-center">{data.title}</div>
				<h3 className="text-center font-bold">Body:</h3>
				<div className="text-center">{data.body}</div>
			</div>
		</div>
	);
}
