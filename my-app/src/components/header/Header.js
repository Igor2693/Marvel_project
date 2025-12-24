import './header.scss'

const Header = () => {
    return (
        <div className="container">
            <div className="header-wrapper">
                <div className="site-name">
                    <a href="#" className='link-to-home'>
                        <span>Marvel</span> information portal
                    </a>
                </div>
                <div className="crumbs">
                    <span className='characters'>Characters </span>
                    /
                    <span className="comics"> Comics</span>
                </div>
            </div>
        </div>
    )
}

export default Header