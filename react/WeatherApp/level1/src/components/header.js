import WsaLogo from '../assets/images/wsa-logo.svg'

const Header = ({resultScreen}) => {
    return(
        <div className="header">
            <img src={WsaLogo} width={183} height={63}/>
            {/* Condtionally appeding a className */}
            <p className={`header-text ${resultScreen ? "header-blue" : ""}`}>WEATHER</p>
        </div>
    )
}

export default Header;