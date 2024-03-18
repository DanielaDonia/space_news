import { fecthBlogs } from '../Service';
import Main from '../componentsLayout/Main';
import './blog.css';

const Blog =()=>{
    return(
            <Main fetchData={fecthBlogs}/>
    )
}

export default Blog;