import Logo from "./Logo"
import Search from "./Search"
import { useTranslation } from "react-i18next"

import { useSelector } from "react-redux"

import "./Header.css"
// import logo from "../../assets/logo.svg"
const Header = () => {
  const { user } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  return (
    <div className="header-container">
      <Logo />
      <div className="header-item">
        {t("welcomePageMessage")} {user.name}
      </div>
      <Search />
    </div>
  )
}

export default Header
