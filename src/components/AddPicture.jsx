import React, { useState } from 'react'

export default function AddPicture(props) {
	const {closeMe, file, setFile} = props


	const hdlClose = e => {
		e.stopPropagation()
		setFile(null)
		closeMe()
	}

	return (
		<div className="flex flex-col p-2 border rounded-lg  ">
			<div className="bg-slate-100 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer"
				onClick={()=>document.getElementById('input-file').click()}
			>
				<input type="file" name="" id="input-file" className='opacity-0'
					onChange={e => {
						if (e.target.files[0]) {
							setFile(e.target.files[0]);
						}
					}}
				/>
				{file && <img src={URL.createObjectURL(file)} className='h-100 block mx-auto'/>}
				<button className='btn btn-sm btn-circle btn-outline border-gray-300 absolute top-1 right-1 opacity-50'
					onClick={hdlClose}
				>x</button>
				{ !file && (
					<p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Add picture</p>
				)}

			</div>

		</div>
	)
}
