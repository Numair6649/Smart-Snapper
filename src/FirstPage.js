import logo from "./images/top-logo.png";
import login from "./images/user-icon.png";
import bell from "./images/bell-icon.png";
import phone from "./images/phone-icon.png";
import cart from "./images/cart-icon.png";
import "./app.css";
import Button from "@mui/material/Button";
import video from "./videos/video.mp4";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function FirstPage() {
	const handleClick = () => {
		console.log("clicked");
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
			<div className="body">
				<video autoplay="" muted>
					<source src={video} type="video/mp4" />
				</video>
				<div className="mainBtns">
					<a href="/Setup1">
						<ToggleButton
							variant="contained"
							size="large"
							color="success"
							sx={[{ color: "#ffffff" }, { background: "#203864" }]}>
							Setup1
						</ToggleButton>
					</a>
				</div>
			</div>

			<footer className="footer">
				Version: 1.0.0 | Copyright (2023) THE GREEN BRIDGE GmbH
			</footer>
		</div>
	);
}

export default FirstPage;
