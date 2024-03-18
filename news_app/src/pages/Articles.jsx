import { fetchArticles } from "../Service";
import Main from "../componentsLayout/Main";

const Articles =()=>{
    return(
        <Main fetchData={fetchArticles}/>
    )
}

export default Articles;