import DownArrow from "../../../icons/DownArrow";
import furnitureImg1 from "../../../images/Furniture_1_blue.png";
import furnitureImg2 from "../../../images/Furniture_2_green.png";
import furnitureImg3 from "../../../images/Furniture_3_red.png";
import furnitureImg4 from "../../../images/Furniture_4_pink_velvet.png";

import css from "./Recommended.module.css";

function Recommended() {
	return (
		<section className={css.Recommended}>
			<div className={css.Recommended_details}>
				<h1>
					<span>
						Recommended
					</span>
						furniture for you!
				</h1>
				<div className={css.Recommended__shortDescription}>
					Based on your tastes, we present you a list of furniture that you might like.
				</div>
				<div className={css.Recommended__productData}>
					<h2 className={css.Recommended__secondTitle}>ERGOSTU Chair with arms for Living Room, Modern Tufted Single Sofa.</h2>
					<div className={css.Recommended__brand}><span>Brand</span>ERGOSTU</div>
					<div className={css.Recommended__color}><span>Color</span>Grayish blue</div>
					<div className={css.Recommended__productDimensions}><span>Product Domensions</span>{'20.08"D x 31.1"W x 32.28"H'}</div>
					<div className={css.Recommended__price}><span>$</span>209.<span>99</span></div>
					<button>
						Buy now
					</button>
					<button>
						cart
					</button>
					<button>
						heart
					</button>
					<div className={css.Recommended__extraData}>
						<div className={css.Recommended__ratings}><span>Global ratings</span>{"(132)"}</div>
						<div className={css.Recommended__bought}><span>Bought</span>10k+</div>
						<div className={css.Recommended__shipping}><span>Free Shipping</span>Delivery Wednesday, July 5</div>
					</div>
				</div>
			</div>
			<div className={css.Recommended__principalProduct}>
				<img className={css.Recommended__principalImg} src={furnitureImg1} alt="" draggable="false"/>
				<div className={css.Recommended__fillCircle}>	
				</div>
				<div className={css.Recommended__borderCircle}>
					<svg viewBox="0 0 750 750" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="8" y="8" width="734" height="734" rx="367" stroke="url(#paint0_linear_2_108)"/>
						<defs>
							<linearGradient id="paint0_linear_2_108" x1="750" y1="750" x2="0" y2="0" gradientUnits="userSpaceOnUse">
							<stop stopColor="white"/>
							<stop offset="1" stopColor="white" stopOpacity="0"/>
							</linearGradient>
						</defs>
					</svg>
					<button className={css.Recommended__colorPick + " " + css.Recommended__colorPickId1 + " " + css.Recommended__colorPick_isActive}>
						<div style={{background: "#7DA1C8"}}></div>
					</button>
					<button className={css.Recommended__colorPick + " " + css.Recommended__colorPickId2}>
						<div style={{background: "#33D491"}}></div>
					</button>
					<button className={css.Recommended__colorPick + " " + css.Recommended__colorPickId3}>
						<div style={{background: "#D48133"}}></div>
					</button>
					<button className={css.Recommended__colorPick + " " + css.Recommended__colorPickId4}>
						<div style={{background: "#D4339E"}}></div>
					</button>
					<button className={css.Recommended__colorPick + " " + css.Recommended__colorPickId5}>
						<div style={{background: "#BED433"}}></div>
					</button>
				</div>
			</div>
			<div className={css.Recommended__verticalCarousel}>
				<button className={css.Recommended_upButton}>
					<DownArrow />
				</button>
				<div className={css.Recommended__carouselItem + " " + css.Recommended__carouselItem_isActive}>
					<img src={furnitureImg1} alt="" draggable="false"/>
				</div>
				<div className={css.Recommended__carouselItem}>
					<img src={furnitureImg2} alt="" draggable="false"/>
				</div>
				<div className={css.Recommended__carouselItem}>
					<img src={furnitureImg3} alt="" draggable="false"/>
				</div>
				<div className={css.Recommended__carouselItem}>
					<img src={furnitureImg4} alt="" draggable="false"/>
				</div>
				<button className={css.Recommended_downButton}>
					<DownArrow />
				</button>
			</div>
		</section>
	)
}

export default Recommended;