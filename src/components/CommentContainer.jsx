import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

export default function CommentContainer(props) {
	const {postId} = props
	return (
		<div className='flex flex-col gap-3'>
			<div className="text-xs">see all comments</div>
			<CommentItem />
			<CommentForm postId={postId}/>
		</div>
	)
}
