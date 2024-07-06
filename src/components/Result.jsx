import React from "react";
import './result.css'
import illustrationSvg from '../assets/images/illustration-empty.svg'

function Result(props) {

	const amount = props.amount
	const term = props.term
	const rate = props.rate
	const type = props.type


	const amountToRepay = amount * (1 + rate / 100);
	const amountToRepayMonthly = (amountToRepay / term) / 12

	const totalInterest = amountToRepay - amount
	const monthlyInterest = (totalInterest / term) / 12


	const repayement = (
		<div className="overview">
			<div className="monthly">
				<p>Your monthly repayments</p>
				<span>{Number(amountToRepayMonthly).toFixed(2)}</span>
			</div>
			<div className="total">
				<p>Total you'll repay over the term</p>
				<span>{Number(amountToRepay).toFixed(2)}</span>
			</div>
		</div>	
	)

	const interest = (
		<div className="overview">
			<div className="monthly">
				<p>Your monthly repayments for the interest</p>
				<span>{Number(monthlyInterest).toFixed(2)}</span>
			</div>
			<div className="total">
				<p>Total interest you'll repay over the term</p>
				<span>{Number(totalInterest).toFixed(2)}</span>
			</div>
		</div>	
	)


	if (props.formFilled) {
		return (
			<div className="result-filled">
				<div className="text-content">
					<h2>Your results</h2>
					<p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
				</div>
				{type == 'repayement' ? repayement : interest}
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