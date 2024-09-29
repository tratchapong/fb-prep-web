
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

export default function CommentContainer(props) {
	const {postId, comments} = props
	return (
		<div className='flex flex-col gap-3'>
			<div className="text-xs">see all comments</div>
			{ comments.map(el => (
				<CommentItem key={el.id} comment={el}/>
			))

			}
			<CommentForm postId={postId}/>
		</div>
	)
}
