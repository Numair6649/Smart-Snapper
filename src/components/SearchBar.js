import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import ForwardIcon from "@mui/icons-material/Forward";

function SearchBar() {
	const [state, setState] = useState({ selectedValue: "noPaymentMethod" });

	const handleSelectValue = (event) => {
		setState({
			selectedValue: event.target.value,
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		console.log("You have submitted:", state.selectedValue);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="combine">
					<form onSubmit={handleFormSubmit}>
						<div className="form-group">
							<select
								value={state.selectedValue}
								onChange={handleSelectValue}
								className="form-control"
								id="paymentMethod">
								<option value="noPaymentMethod">Select payment method</option>
								<option value="creditCard">Credit Card</option>
								<option value="debitCard">Debit Card</option>
								<option value="bankTransfer">Bank Transfer</option>
							</select>
						</div>
						<ForwardIcon fontSize="large" onClick={handleFormSubmit} />
					</form>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
