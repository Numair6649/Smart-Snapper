import { useState } from "react";
import "./CollapseWindow.css";
function CollapseWindow() {
	const [show, setShow] = useState(false);

	return (
		<div className="CollapsePosition">
			<div className="CollapseTopbar">
				<div className="CollapseTopbarText">Filter</div>
			</div>
			<div className="CollapseMain"> Hi</div>
			<div CollapseWindow className="CollapseDiv">
				{show && "Hi there"}{" "}
			</div>
			<div className="CollapseBotbar">
				<button type="button" onClick={() => setShow(!show)} />
			</div>
		</div>
	);
}

export default CollapseWindow;
