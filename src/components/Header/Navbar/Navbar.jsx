import css from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={css.Navbar}>
			<ul className={css.Navbar__ul}>
				<li className={css.Navbar__li}>
					<a href="#">Home</a>
				</li>
				<li className={css.Navbar__li}>
					<a href="#">Categories</a>
				</li>
				<li className={css.Navbar__li}>
					<a href="#">Blog</a>
				</li>
				<li className={css.Navbar__li}>
					<a href="#">About Us</a>
				</li>
				<li className={css.Navbar__li}>
					<a href="#">Contact Us</a>
				</li>
			</ul>
		</div>
	)
}

export default Navbar;