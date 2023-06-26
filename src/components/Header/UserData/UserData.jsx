import css from "./UserData.module.css";
import UserImage from "../../../images/UserImage.png";
import DownArrow from "../../../icons/DownArrow";
import Cart from "../../../icons/Cart";
import Heart from "../../../icons/Heart";

function UserData() {
	return (
		<div className={css.UserData}>
			<button data-favoriteCount="10" className={css.UserData__favorites}>
				<Heart />
			</button>
			<button data-cartCount="20" className={css.UserData__cart}>
				<Cart />
			</button>
			<div className={css.UserData__options}>
				<div className={css.UserData__greeting}>
					Hello,
					<span className={css.UserData__name}>Andres!</span>
				</div>
				<img className={css.UserData__img} src={UserImage} alt="User image" />
				<DownArrow />
			</div>
		</div>
	)
}

export default UserData;