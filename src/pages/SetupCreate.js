import logo from "../images/top-logo.png";
import login from "../images/user-icon.png";
import bell from "../images/bell-icon.png";
import phone from "../images/phone-icon.png";
import cart from "../images/cart-icon.png";
import logomap from "../images/logo1.png";
import vectorLeft from "../images/VectorLeft.png";
import vectorRight from "../images/VectorRight.png";
import "../SecondPage.css";
import SetupDropdown from "../components/SetupDropdown";
import { useState } from "react";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CollapseWindow from "../components/CollapseWindow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SetupCreate.css";
import EnhancedTable from "../components/EnhancedTable";

function SetupCreate() {
	const [selected, setSelected] = useState(false);
	const [isShown, setIsShown] = useState(false);

	const [alignment, setAlignment] = useState("SETUP");

	const handleChange = (event, newAlignment) => {
		setAlignment(newAlignment);
	};
	const handleClick = () => {
		console.log("clicked");
	};
	const setupDropdown = () => {
		setIsShown((current) => !current);
	};
	const [alignment1, setAlignment1] = useState("Client");

	const handleChange1 = (event, newAlignment) => {
		setAlignment1(newAlignment);
	};
	const handleClick1 = () => {
		console.log("clicked");
		<SetupCreate />;
	};
	return (
		<div className="page">
			<div className="header">
				<div
					className="header_group
                ">
					<a href="/">
						<img className="logo" src={logo} />
					</a>
					<div className="website_name">
						<span className="first"> smart- </span>

						<span className="second">
							<b>SNAPPER</b>
						</span>
						<br />
						<span className="bottom">
							Connecting reality powered by geoGRIM
						</span>
					</div>
				</div>
				<div className="icons">
					<div className="userName">User Name</div>
					<img className="header_image" src={login} onClick={handleClick} />
					<img className="header_image" src={bell} onClick={handleClick} />
					<img className="header_image" src={cart} onClick={handleClick} />
					<img className="header_image" src={phone} onClick={handleClick} />
				</div>
			</div>
			<div className="NavigationBar">
				<ToggleButton
					value="check"
					selected={selected}
					sx={{
						width: "50px",
						height: "61px",
						backgroundColor: "#4bc948",
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
					sx={{ background: "#203864", width: "1330px" }}
					value={alignment}
					color="warning"
					exclusive
					onChange={handleChange}
					aria-label="Platform">
					<ToggleButton
						size="large"
						value="SETUP"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.198 },
							{ background: "#4bc948" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							margin: "2px",
						}}
						onClick={setupDropdown}>
						SETUP
					</ToggleButton>

					{isShown && <SetupDropdown />}

					<ToggleButton
						variant="text"
						size="large"
						value="MANAGE"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.198 },
							{ background: "#4bc948" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							margin: "2px",
						}}>
						MANAGE
					</ToggleButton>

					<ToggleButton
						variant="text"
						size="large"
						value="SIMULATE"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.198 },
							{ background: "#4bc948" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							margin: "2px",
						}}>
						SIMULATE
					</ToggleButton>

					<ToggleButton
						variant="text"
						size="large"
						value="VISUALIZE"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.198 },
							{ background: "#4bc948" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							margin: "2px",
						}}>
						VISUALIZE
					</ToggleButton>

					<ToggleButton
						variant="text"
						size="large"
						value="REPORT"
						sx={[
							{ color: "#ffffff" },
							{ width: 0.198 },
							{ background: "#4bc948" },
						]}
						aria-label="bold"
						style={{
							outlineColor: "white",
							outlineWidth: "1px",
							outlineStyle: "solid",
							margin: "2px",
						}}>
						REPORT
					</ToggleButton>
				</ToggleButtonGroup>
				<ToggleButton
					value="check"
					selected={selected}
					sx={{
						width: "50px",
						height: "61px",
						backgroundColor: "#4bc948",
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
					<ArrowForwardIosIcon />
				</ToggleButton>
			</div>
			<div className="body">
				<div className="Collapse">
					<CollapseWindow />
				</div>
				<div className="Enhancedtable">
					<EnhancedTable />
				</div>
			</div>
			<footer className="footer1">
				Version: 1.0.0 | Copyright (2023) THE GREEN BRIDGE GmbH
			</footer>

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
						value={alignment1}
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
		</div>
	);
}
export default SetupCreate;
