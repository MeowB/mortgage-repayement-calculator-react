import { useState } from 'react';
import './App.css';
import Result from './components/Result';


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

	function handleClearClick() {
		const form = document.getElementById("form").reset()
		setFormFilled(false)
	}

  return (
    <>
		<div className="main-content">
			<div className="text">
				<h1>Mortgage Calculator</h1>
				<a onClick={handleClearClick}>Clear All</a>
			</div>
			<div className="form">
				<form action="#" id='form'>
					<div className="mortgage-amount">
						<label htmlFor="mortgage-amount">Mortgage Amount</label>
						<input 	type="number" 
								name="mortgage-amount" 
								id="mortgage-amount" 
								required
								onChange={(e) => setAmount(e.target.value)}
								style={{ 	
									borderColor: amountError ? 'red' : '',
									backgroundImage: amountError ? 'linear-gradient(90deg, rgb(215, 51, 40) 60px, #fff 60px)' : ''
								}}
						/>
						<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.648 14.5V12.43H2.448V5.248C2.448 4.372 2.628 3.61 2.988 2.962C3.36 2.302 3.882 1.792 4.554 1.432C5.238 1.06 6.042 0.873999 6.966 0.873999C7.698 0.873999 8.37 1.012 8.982 1.288C9.606 1.564 10.128 1.954 10.548 2.458C10.968 2.95 11.22 3.538 11.304 4.222L9.144 4.888C9.06 4.288 8.814 3.838 8.406 3.538C8.01 3.226 7.53 3.07 6.966 3.07C6.306 3.07 5.796 3.262 5.436 3.646C5.076 4.018 4.896 4.552 4.896 5.248V12.43H10.71V14.5H0.648ZM0.648 8.434V6.922H8.208V8.434H0.648Z" fill={amountError ? '#fff' : '#4E6E7E' } />
						</svg>
						{amountError ? errorMessage : ''}
					</div>


					<div className="wrapper">
						<div className="mortgage-term">
							<label htmlFor="mortgage-term">Mortgage Term</label>
							<input 	type="number" 
									name="mortgage-term" 
									id="mortgage-term" 
									required
									onChange={(e) => setTerm(e.target.value)}
									style={{
										borderColor: termError ? 'red' : '', 
										backgroundImage: termError ? `linear-gradient(270deg, #D73328 80px, #fff 80px)` : '',
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
										backgroundImage: rateError ? `linear-gradient(270deg, #D73328 60px, #fff 60px)` : '' 
									}}
							/>
							<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.754 14.5L12.626 1.09H15.146L4.274 14.5H1.754ZM3.842 7.894C3.182 7.894 2.582 7.738 2.042 7.426C1.514 7.102 1.094 6.676 0.782 6.148C0.47 5.62 0.314 5.032 0.314 4.384C0.314 3.736 0.47 3.148 0.782 2.62C1.094 2.08 1.514 1.654 2.042 1.342C2.582 1.03 3.182 0.873999 3.842 0.873999C4.514 0.873999 5.114 1.03 5.642 1.342C6.17 1.654 6.59 2.08 6.902 2.62C7.214 3.148 7.37 3.736 7.37 4.384C7.37 5.032 7.214 5.62 6.902 6.148C6.59 6.676 6.17 7.102 5.642 7.426C5.114 7.738 4.514 7.894 3.842 7.894ZM3.842 6.076C4.202 6.076 4.502 5.998 4.742 5.842C4.982 5.674 5.162 5.464 5.282 5.212C5.414 4.948 5.48 4.672 5.48 4.384C5.48 4.084 5.414 3.808 5.282 3.556C5.162 3.304 4.982 3.094 4.742 2.926C4.502 2.758 4.202 2.674 3.842 2.674C3.506 2.674 3.212 2.758 2.96 2.926C2.72 3.094 2.534 3.31 2.402 3.574C2.27 3.826 2.204 4.096 2.204 4.384C2.204 4.66 2.27 4.93 2.402 5.194C2.534 5.458 2.72 5.674 2.96 5.842C3.212 5.998 3.506 6.076 3.842 6.076ZM12.986 14.716C12.326 14.716 11.726 14.56 11.186 14.248C10.658 13.924 10.238 13.498 9.926 12.97C9.614 12.442 9.458 11.854 9.458 11.206C9.458 10.558 9.614 9.97 9.926 9.442C10.238 8.902 10.658 8.476 11.186 8.164C11.726 7.852 12.326 7.696 12.986 7.696C13.658 7.696 14.258 7.852 14.786 8.164C15.314 8.476 15.734 8.902 16.046 9.442C16.358 9.97 16.514 10.558 16.514 11.206C16.514 11.854 16.358 12.442 16.046 12.97C15.734 13.498 15.314 13.924 14.786 14.248C14.258 14.56 13.658 14.716 12.986 14.716ZM12.986 12.898C13.334 12.898 13.628 12.82 13.868 12.664C14.12 12.496 14.306 12.286 14.426 12.034C14.558 11.77 14.624 11.494 14.624 11.206C14.624 10.906 14.558 10.63 14.426 10.378C14.306 10.126 14.12 9.916 13.868 9.748C13.628 9.58 13.334 9.496 12.986 9.496C12.65 9.496 12.356 9.58 12.104 9.748C11.864 9.916 11.678 10.132 11.546 10.396C11.414 10.648 11.348 10.918 11.348 11.206C11.348 11.482 11.414 11.752 11.546 12.016C11.678 12.28 11.864 12.496 12.104 12.664C12.356 12.82 12.65 12.898 12.986 12.898Z" fill={rateError ? '#fff' : '#4E6E7E'}/>
							</svg>
							
							{rateError ? errorMessage : ''}
						</div>
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
