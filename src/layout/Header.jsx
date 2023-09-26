import logo from "../images/logo192.png"

const Header = () => {
  return (
    <div className="px-4 py-2">
      <img className="px-1" src={logo} width={60} />
      <span className="px-1 display-6 align-middle">Counter Game</span>
    </div>
  )
}

export default Header