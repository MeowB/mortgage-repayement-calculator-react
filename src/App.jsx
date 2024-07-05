import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import poundSvg from './assets/images/poundError.svg'
import percentSvg from './assets/images/percentError.svg'


function App() {
	// setting all the data input
	const [amount, setAmount] = useState(0)
	const [term, setTerm] = useState(0)
	const [rate, setRate] = useState(0)
	const [type, setType] = useState('')
	const [formFilled, setFormFilled] = useState(false)


	// setting all error handlers
	const [amountError, setAmountError] = useState(false)
	const [termError, setTermError] = useState(false)
	const [rateError, setRateError] = useState(false)
	const [typeError, setTypeError] = useState(false)
	const errorMessage = <p className='error'>This field is required</p>

	function handleSubmit() {
		if (amount == 0) {
			setAmountError(true)
		} else {
			setAmountError(false)
		}

		if (term == 0) {
			setTermError(true)
		} else {
			setTermError(false)
		}

		if (rate == 0) {
			setRateError(true)
		} else {
			setRateError(false)
		}

		if (type == '') {
			setTypeError(true)
		} else {
			setTypeError(false)
		}


		if (amount != 0 && term != 0 && rate != 0 && type != '') {
			setFormFilled(true)
		}
	}
  return (
    <>
		<div className="main-content">
			<h1>Mortgage Calculator</h1>
			<a href="#">Clear All</a>
			<div className="form">
				<form action="#">
					<div className="mortgage-amount">
						<label htmlFor="mortgage-amount">Mortgage Amount</label>
						<input 	type="number" 
								name="mortgage-amount" 
								id="mortgage-amount" 
								required
								onChange={(e) => setAmount(e.target.value)}
								style={{ 	
									borderColor: amountError ? 'red' : '', 
									backgroundImage: amountError ? `linear-gradient(90deg, #D73328 16%, #fff 16%)` : '' 
								}}
						/>
						{amountError ? errorMessage : ''}
			
					</div>

					<div className="mortgage-term">
						<label htmlFor="mortgage-term">Mortgage Term</label>
						<input 	type="number" 
								name="mortgage-term" 
								id="mortgage-term" 
								required
								onChange={(e) => setTerm(e.target.value)}
								style={{
									borderColor: termError ? 'red' : '', 
									backgroundImage: termError ? `linear-gradient(270deg, #D73328 22%, #fff 22%)` : '',
								}}	 
						/>
						{termError ? errorMessage : ''}
						<div className="absolute">
							<p style={{ color: termError ? '#fff' : ''}}>years</p>
						</div>
					</div>	
					
					<div className="interest-rate">
						<label htmlFor="interest-rate">Interest Rate</label>
						<input 	type="number" 
								name="interest-rate" 
								id="interest-rate" 
								required
								onChange={(e) => setRate(e.target.value)} 
								style={{ 	
									borderColor: rateError ? 'red' : '', 
									backgroundImage: rateError ? `url(${percentSvg}), linear-gradient(270deg, #D73328 16%, #fff 16%)` : '' 
								}}
						/>
						{rateError ? errorMessage : ''}
					</div>

					<div className="radio">
						<h2>Mortgage Type</h2>
						<div>
							<label for="html">Repayement</label><br></br>
							<input 	type="radio" 
									id="repayement" 
									name="mortgage-type" 
									value="repayement" 
									onChange={() => setType('repayement')} />
						</div>
						<div>
							<label for="html">Interest Only</label><br></br>
							<input 	type="radio" 
									id="interest" 
									name="mortgage-type" 
									value="interest-only" 
									onChange={() => setType('interest-only')} />
						</div>
						{typeError ? errorMessage : ''}
					</div>

					<input type="button" onClick={handleSubmit} />
				</form>
			</div>
			<Result amount={amount} term={term} rate={rate} type={type} formFilled={formFilled}/>
		</div>
    </>
  )
}

export default App
