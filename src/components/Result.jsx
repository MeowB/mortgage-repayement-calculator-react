import React from "react";
import './result.css'
import illustrationSvg from '../assets/images/illustration-empty.svg'

function Result(props) {
	console.log(props.formFilled)
	const bool = true

	if (props.formFilled) {
		return (
			<div className="result-filled">
				<div className="text-content">
					<h2>Your results</h2>
					<p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
				</div>
				<div className="overview">
					<div className="monthly">
						<p>Your monthly repayments</p>
						<span>1.222.15</span>
					</div>
					<div className="total">
						<p>Total you'll repay over the term</p>
						<span>555.555.22</span>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="result-empty">
				<img src={illustrationSvg} alt="illustration" />
				<h2>Results shown here</h2>
				<p>Complete the form and click "calculate repayments" to see what your monthly repayments would be</p>
			</div>
		)
	}


}


export default Result