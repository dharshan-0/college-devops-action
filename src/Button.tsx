
type ButtonProp = {
	message: string
	onClick(): any
}



export default function Button({message, onClick}: ButtonProp) {
	return (
	<button
	onClick={onClick}
	>{message}</button>
	)
}
