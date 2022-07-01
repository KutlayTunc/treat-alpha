import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import "./Header.css"
// import logo from "../../assets/logo.svg"
const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <div className="header-item">Current Page Message</div>

      <Search />
    </div>
  )
}

export default Header
