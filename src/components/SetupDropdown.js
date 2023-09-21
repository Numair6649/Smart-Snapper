import "./SetupDropdown.css";
import vectorRight from "../images/VectorRight.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SetupCreate from "../pages/SetupCreate";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SetupDropdown() {
	const [selected, setSelected] = useState(false);
	const [alignment, setAlignment] = useState("");

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};
	const handleClick = () => {
		console.log("clicked");
		<SetupCreate />;
	};

	return (
		<div className="SetupDropdown">
			<div className="arrowButton">
				<ToggleButton
					value="check"
					selected={selected}
					sx={{
						width: "50px",
						height: "61px",
						color: "#ffffff",
					}}
					style={{
						outlineColor: "#203864",
						outlineWidth: "1px",
						outlineStyle: "solid",
						borderInlineColor: "white",
					}}
					onChange={() => {
						setSelected(!selected);
					}}>
					<ArrowBackIosNewIcon />
				</ToggleButton>
				<ToggleButtonGroup
					fullWidth
					sx={{
						background: "white",
						height: "60px",
						width: "800px",
						color: "black",
						backgroundColor: "white",
					}}
					value={alignment}
					exclusive
					onChange={handleChange}
					aria-label="Platform">
					<ToggleButton
						size="large"
						value="Client"
						href="/Setup1/Setup/Create"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.33 },
							{ background: " #c9bfbf" },
							{ height: "60px" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							marginLeft: "2px",
							marginRight: "2px",
						}}
						onClick={handleClick}>
						Client
					</ToggleButton>

					<ToggleButton
						size="large"
						value="Aliases"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.33 },
							{ background: " #c9bfbf" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							marginRight: "2px",
						}}>
						Aliases
					</ToggleButton>

					<ToggleButton
						size="large"
						value="Tasks"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.34 },
							{ background: " #c9bfbf" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
						}}>
						Tasks
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			<div className="rightArrow">
				<ToggleButton
					value="check"
					selected={selected}
					sx={{
						width: "50px",
						height: "61px",
						color: "#ffffff",
					}}
					style={{
						outlineColor: "#203864",
						outlineWidth: "1px",
						outlineStyle: "solid",
						borderInlineColor: "white",
						marginLeft: "2px",
					}}
					onChange={() => {
						setSelected(!selected);
					}}>
					<ArrowForwardIosIcon />
				</ToggleButton>
			</div>
		</div>
	);
}
export default SetupDropdown;
