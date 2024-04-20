
import Link from "next/link"


const Header = () => {
  return <header>
    <nav id='pc'>
        <div id='nav-cover'>
          <Link href='/' className='home-link header-hover'>GENSHIN&nbsp;<i className="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
          <div id='pc-nav'>

            <Link href='/'><i className="fa-solid fa-image-portrait"></i>&nbsp;Personagens</Link>
            <Link href='/tier-list'><i className="fa-solid fa-people-group"></i>&nbsp;Tier-List</Link>
            <Link href='/times'><i className="fa-solid fa-users"></i>&nbsp;Times</Link>
            <Link href='/farming'><i className="fa-solid fa-wheat-awn" ></i>&nbsp;Farming</Link>
            <Link href='https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481' target='_blank'><i className="fa-solid fa-check-double"></i>&nbsp;Check-In</Link>
          </div>
        </div>
    </nav>
    <nav id='mobile'>
        <Link href='/' className='home-link'>GENSHIN&nbsp;<i className="fa-brands fa-meta"></i>&nbsp;BUILD</Link>
        <input type="checkbox" id="mobile-button" />
        <label htmlFor="mobile-button">
          <i id='open-menu' className="fa-solid fa-bars"></i>
          <i id='close-menu' className="fa-solid fa-x"></i>
        </label>
    </nav>
    <div id='mobile-counter'>
      <div id='mobile-links'></div>
    </div>
    </header>
}

export default Header