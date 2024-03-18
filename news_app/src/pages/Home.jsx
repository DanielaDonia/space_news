import Main from "../componentsLayout/Main";
import { fetchArticles } from "../Service";

const Home = ()=>{
return(
    
        <Main fetchData={fetchArticles}/>

)

}

export default Home;