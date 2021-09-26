import Gift from "./Gift/Gift"
import Personal from "./Personal/Personal"
import Wish from "./Wish/Wish"

const Content = () => {
	return (
		<>
			<Wish textColor="#cd122d" overlayColor="#fdc52c">
				HAPPY BIRTHDAY BHONDUU!!
			</Wish>

			<Personal />

			<Gift />

			<div className="footer">
				<h6 style={{padding: '5px 0 5px 0'}}>Bhondu Birthday PVT LTD</h6>
			</div>
		</>
	)
}

export default Content
