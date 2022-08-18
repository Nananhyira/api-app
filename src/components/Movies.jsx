import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Movies() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=p5DcCo7aswI43RVinT0fO8Gx4f9p0aw5"
			)
			// https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=bHxn40w2REYoYtqGaLdUSwL0tpjHW4D8")

			.then((response) => {
				console.log(response.data.results);
				setMovies(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="APIinformation">
			<marquee>
				<h1 className="h1_nav"> Movies Reviews</h1>
			</marquee>
			{movies.map((item, index) => {
				return (
					<div className="api_info" key={index}>
						<h2 className="img-box">
							<img
								width="40%"
								src={item.multimedia?.src}
								alt="picture of movie"
							/>
						</h2>
						<h1>
							Title:<span className="each_info">{item.display_title}</span>
						</h1>
						<h2>
							Byline :<span className="each_info"> :{item.byline}</span>
						</h2>
						<h2>
							Critic pick :
							<span className="each_info">{item.critics_pick}</span>
						</h2>

						<h2>
							publication date:
							<span className="each_info">{item.publication_date}</span>
						</h2>
						<h2>
							Head Line: <span className="each_info">{item.headline}</span>
						</h2>
						<h2 className="summary">
							Movie Summary:
							<span className="each_info">{item.summary_short} </span>
							<span>
								<a href={item.link.url}>See More: </a>
							</span>
						</h2>

						<h2>
							Publication Date:
							<span className="each_info"> {item.publication_date} </span>
						</h2>
						<h2>
							Opening Date:
							<span className="each_info"> {item.opening_date} </span>
						</h2>
						<h2>
							Date Updated:{" "}
							<span className="each_info"> {item.date_updated} </span>{" "}
						</h2>

						<br />
						<br />
						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default Movies;
