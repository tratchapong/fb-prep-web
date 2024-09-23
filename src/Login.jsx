import { useState } from "react";
import { FacebookTitle } from "./icons";
import Register from "./Register";
import useUserStore from "./stores/userStore";
import { toast } from "react-toastify";

function Login() {

  const {login, logout, user, token} = useUserStore()

  const [input,setInput] = useState( { 
    identity : '',
    password : ''
   })

   const hdlChange = e => {
    setInput( prv => ({...prv, [e.target.name] : e.target.value}))
   }


	const hdlLogin = async e => {
    try {
      e.preventDefault()
      console.log('login...')
      // login({identity : 'andy@ggg.mail', password: '123456'})
      await login(input)
      toast.info(token)
    }catch(err) {
      const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
    }
	}

  return (
    <>
      <div className="h-700 pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between">
          <div className="flex flex-col gap-4 mt-20 basis-3/5">
            <FacebookTitle className="-ms-8 w-80" />
            <h2 className="text-[30px] leading-8 -mt-6  w-[514px]">
              Facebook helps you connect and share with the people in your life.
            </h2>
						<p className="text-xm text-error">** This is not real Facebook site**</p>
          </div>
          <div className="flex flex-1 ">
            <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
              <form onSubmit={hdlLogin}>
                <div className="card-body gap-3 p-4">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    className="input input-bordered w-full"
                    name="identity"
                    value={input.value}
                    onChange={hdlChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    value={input.password}
                    onChange={hdlChange}
                  />
                  <button className="btn btn-primary text-xl">Log in</button>
                  <p className="opacity-70 text-center cursor-pointer flex-grow-0">
                    Forgotten password?
                  </p>
                  <div className="divider my-0"></div>
                  <button
										type='button'
                    className="btn btn-secondary text-lg text-white w-fit mx-auto"
                    onClick={() =>
                      document.getElementById("register-modal").showModal()
                    }
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-modal" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
          <Register />
        </div>
      </dialog>
    </>
  );
}

export default Login;

