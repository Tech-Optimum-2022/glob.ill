import Carousel from "react-bootstrap/Carousel";
import Globe from "../components/FireGlobe";

function GlobeGang() {
	return (
		<Carousel>
			<Carousel.Item>
				<div
					style={{
						backgroundColor: "#111111",
					}}>
					<Globe></Globe>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					style={{
						backgroundColor: "#111111",
					}}>
					<Globe></Globe>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					style={{
						backgroundColor: "#111111",
					}}>
					<Globe></Globe>
				</div>
			</Carousel.Item>
		</Carousel>
	);
}

export default GlobeGang;
