import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import { useTranslation } from "react-i18next"
import "./Header.css"
// import logo from "../../assets/logo.svg"
const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="header-container">
      <Logo />
      <div className="header-item">{t("welcomePageMessage")} Erol Egemen</div>
      <Search />
    </div>
  )
}

export default Header
