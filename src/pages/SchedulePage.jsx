import React from "react";
import Schedule from "../components/Schedule";

const SchedulePage = () => {
	return (
		<div className="container">
			<div className="box">
				<div style={{ marginTop: "100px" }}>
					<Schedule />
				</div>
				<div className="bottom-button-container">
					<div
						className="bottom-button"
						onClick={() => {
							window.location.assign("/");
						}}
					>
						<div className="bottom-button-text">Alle Gerechten</div>
					</div>
					<div
						className="bottom-button"
						onClick={() => {
							window.location.assign("/boodschappenlijstje");
						}}
					>
						<div className="bottom-button-text">Boodschappenlijstje</div>
					</div>
					<div
						className="bottom-button"
						onClick={() => {
							window.location.assign("/weekmenu");
						}}
					>
						<div className="bottom-button-text">Weekmenu</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchedulePage;
