import React from "react";
import './Form.css'

function Form() {
	return (
		<div className="form">
			<form action="#">
				<div className="mortgage-amount">
					<label htmlFor="mortgage-amount">Mortgage Amount</label>
					<input type="number" name="mortgage-amount" id="mortgage-amount" />
				</div>
	
				<div className="mortgage-term">
					<label htmlFor="mortgage-term">Mortgage Term</label>
					<input type="number" name="mortgage-term" id="mortgage-term" />
					<p>years</p>
				</div>	
				
				<label htmlFor="interest-rate">Interest Rate</label>
				<input type="number" name="interest-rate" id="interest-rate" />

				

				<div className="radio">
					<h2>Mortgage Type</h2>
					<div>
						<label for="html">Repayement</label><br></br>
						<input type="radio" id="repayement" name="mortgage-type" value="repayement" />
					</div>
					<div>
						<label for="html">Interest Only</label><br></br>
						<input type="radio" id="interest" name="mortgage-type" value="interest-only" />
					</div>
				</div>

				<input type="button" />
			</form>
		</div>
	)
}

export default Form