import React from 'react'

function Register() {

	const hdlRegister = e=> {
		e.preventDefault()
		console.log(999)
		e.target.closest('dialog').close()
	}
	return (
		<form className='flex flex-col gap-3 p-4' onSubmit={hdlRegister}>
			<div className="flex gap-2">
				<input type="text" placeholder="First name" className="input input-bordered w-full" />
				<input type="text" placeholder="Surname" className="input input-bordered w-full" />
			</div>
			<input type="text" placeholder="Email address or phone number" className="input input-bordered w-full" />
			<input type="password" placeholder="New password" className="input input-bordered w-full" />
			<input type="password" placeholder="Confirm password" className="input input-bordered w-full" />
			<button className="btn btn-secondary text-xl text-white">Sign up</button>
		</form>
	)
}

export default Register