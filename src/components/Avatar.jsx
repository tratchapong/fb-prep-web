import defaultAvatar from '../assets/avatar-batman.png'

export default function Avatar(props) {
	const {imgSrc, ...restProps } = props
	return (
		<div className="avatar items-center cursor-pointer">
			<div {...restProps}>
				<img src={imgSrc ?? defaultAvatar} />
			</div>
		</div>
	)
}
