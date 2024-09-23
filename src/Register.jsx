import { useState } from 'react'
import {toast, ToastContainer, Flip} from 'react-toastify'
import useUserStore from "./stores/userStore";

function Register() {
	const {register} = useUserStore()

  const [input,setInput] = useState( { 
    identity : '',
		firstName : '',
		lastName : '',
    password : '',
		confirmPassword : '',
   })

	 const hdlChange = e => {
    setInput( prv => ({...prv, [e.target.name] : e.target.value}))
   }

	const hdlRegister = async e=> {
		try {
			e.preventDefault()
			await register(input)
			e.target.closest('dialog').close()
			toast.info('register successful')
		}catch(err) {
			const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg, { containerId : 'RegisterToast'})
		}
	}
	return (
		<>
		<form className='flex flex-col gap-3 p-4 pt-10' onSubmit={hdlRegister}>
			<div className="flex gap-2">
				<input type="text" placeholder="First name" className="input input-bordered w-full" 
					name='firstName'
					value={input.firstName}
					onChange={hdlChange}
				/>
				<input type="text" placeholder="Surname" className="input input-bordered w-full" 
					name='lastName'
					value={input.lastName}
					onChange={hdlChange}
				/>
			</div>
			<input type="text" placeholder="Email address or phone number" className="input input-bordered w-full"
					name='identity'
					value={input.identity}
					onChange={hdlChange}			
			/>
			<input type="password" placeholder="New password" className="input input-bordered w-full" 
					name='password'			
					value={input.password}
					onChange={hdlChange}
			/>
			<input type="password" placeholder="Confirm password" className="input input-bordered w-full"
					name='confirmPassword'			
					value={input.confirmPassword}
					onChange={hdlChange}			
			/>
			<button className="btn btn-secondary text-xl text-white">Sign up</button>
		</form>
		<ToastContainer containerId="RegisterToast" transition={Flip} position='top-center'/>
		</>
	)
}

export default Register