import React from 'react'

function Register() {

	const hdlRegister = e=> {
		// e.preventDefault()
		console.log(999)
	}
	return (
		<form method="dialog" className='flex flex-col gap-3 p-4' onSubmit={hdlRegister}>
			<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			<div className="flex gap-2">
				<input type="text" placeholder="First name" className="input input-bordered w-full" />
				<input type="text" placeholder="Surname" className="input input-bordered w-full" />
			</div>
			<input type="text" placeholder="Email address or phone number" className="input input-bordered w-full" />
			<input type="password" placeholder="New password" className="input input-bordered w-full" />
			<input type="password" placeholder="Confirm password" className="input input-bordered w-full" />
			<button className="btn btn-success text-xl text-white">Register</button>
		</form>
	)
}

export default Register