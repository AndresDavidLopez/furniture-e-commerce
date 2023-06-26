import Brand from "./Brand/Brand";
import Navbar from "./Navbar/Navbar";
import css from "./Header.module.css";
import UserData from "./UserData/UserData";

function Header() {
	return (
		<div className={css.Header}>
			<div className={css.Header__left}>
				<Brand />
				<Navbar />
			</div>
			<div className={css.Header__right}>
				<UserData />
			</div>
		</div>
	)
}

export default Header;