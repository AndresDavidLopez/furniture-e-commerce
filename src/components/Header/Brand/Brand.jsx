import BrandLogo from "../../../icons/BrandLogo";
import css from "./Brand.module.css";

function Brand() {
	return (
		<div className={css.Brand}>
			<div className={css.Brand__img}>
				<BrandLogo />
			</div>
			<div className={css.Brand__name}>
				<div className={css.Brand__start}>Your</div>
				<span className={css.Brand__resalted}>Furniture</span>
				<div className={css.Brand__end}>.com</div>
			</div>
		</div>
	)
}

export default Brand;