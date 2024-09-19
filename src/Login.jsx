import { FacebookTitle } from './icons'
import Register from './Register'

function Login() {
	return (
		<>
			<div className='h-700 pt-20 pb-28 bg-[#f2f4f7]' >
				<div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between">
					<div className="flex flex-col gap-4 mt-28 basis-3/5">
						<FacebookTitle className='-ms-8 w-80' />
						<h2 className='text-[28px] leading-8 -mt-6  w-[500px]'>Facebook helps you connect and share with the people in your life.</h2>
					</div>
					<div className="flex flex-1 ">
						<div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
							<div className="card-body gap-3 ">
								<input type="text" placeholder="Email address or phone number" className="input input-bordered w-full" />
								<input type="password" placeholder="Password" className="input input-bordered w-full" />
								<button className="btn btn-primary text-xl">Log in</button>
								<p className='opacity-70 text-center cursor-pointer flex-grow-0'>Forgotten password?</p>
								<div className="divider my-0"></div>
								<button className="btn btn-success text-lg text-white w-fit mx-auto"
									onClick={() => document.getElementById('register-modal').showModal()}
								>Create new account</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<dialog id="register-modal" className="modal">
				<div className="modal-box">
					<Register />
				</div>
			</dialog>
		</>
	)
}

export default Login