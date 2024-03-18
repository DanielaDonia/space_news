import {Link} from 'react-router-dom';
import banner2 from '../banner2.gif'

const Banner = ()=>{

return(
    <header className='banner-header'>
        <div className='bannerTitleImage'>
            <img id='banner'src={banner2} alt="Banner"></img>
             <h1 className='banner-title'>Space News</h1>
        </div>
        <nav>
            <ul className='banner-nav'>
            <li>
              <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Articles'>Articles</Link>
              </li>
            <li>
                <Link to='/Blog'>Blog </Link>
                </li>
            <li>
                <Link to='/Reports'>Reports</Link>
            </li>
        
        </ul>
        </nav>
    </header>
)
}

 



export default Banner;