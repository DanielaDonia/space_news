import { fetchReports } from '../Service'
import Main from '../componentsLayout/Main'
import './Reports.css';

const Resports = ()=>{
    return(
        <Main fetchData={fetchReports}/> 
    )
}

export default Resports;