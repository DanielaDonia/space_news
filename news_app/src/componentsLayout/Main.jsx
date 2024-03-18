import React, { useEffect, useState } from "react";
import { useTheme, useThemeUpdate} from './LightDarkTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Main = ({fetchData}) => {
    const [data, setData] = useState(null);
    const [orderBy, setOrderBy] = useState('');
    const [pagination, setPagination] = useState('published_at');   
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const [searchValue, setSearchValue] = useState('');
    const [originalData, setOriginalData] = useState(null); 

  

useEffect(() => {
        fetchAPI();
    }, [pagination,orderBy]);

    const fetchAPI = async () => {
        try {
            setLoading(true);
            const api = await fetchData(pagination,orderBy);
            if (!api.data) {
                setError(true)
                return;
            }
            setData(api.data);
            setOriginalData(api.data);
        } catch (error) {
            setError(true)
        }finally{
            setLoading(false);
        }
    }

    const handlerOrder = (event) => {
     const selectedOrder = event.target.value;
         setOrderBy(selectedOrder);
      
    }

    

    const handlerNext = () =>{
        if (data && data.next === null){
            return;
        }else{
           setPagination(data.next);
         
        }
    }

    const handlerPrevious = ()=>{
        if(data && data.previous === null){
            return;
        }else{
            setPagination(data.previous);
        }
    }

    
    const handlerSearch = () => {
        if (!searchValue.trim()) {
            setData(originalData); 
            return;
        }
        const filteredData = originalData.results.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        if(filteredData.length === 0){
            setError(true);
        }else{
 setData({ ...originalData, results: filteredData });
 setError(false)
        }
       
}
    


const handlerInput = (e)=>{
    setSearchValue(e.target.value);

}
    
const toggleDarkMode = () => {
      toggleTheme();
    };

    return (
        <main className={darkTheme ? 'dark-mode' : 'light-mode'}>
        <button id="darkButton" onClick={toggleDarkMode}>Dark Mode</button>
        <div id='mainContainer'>
            <div id="searchContainer">
                <input
                    type="text"
                    placeholder="Search Here"
                    value={searchValue}
                    onChange={handlerInput}
                    className='search-input'
                />
                <button id='button-ok' onClick={handlerSearch}>Ok</button>
            </div>
            {!error && !loading && (
                <>
                    <div>
                        <label id="order">Order By:</label>
                        <select value={orderBy} onChange={handlerOrder}>
                            <option value='-published_at'>Recent</option>
                            <option value='published_at'>Older</option>
                        </select>
                    </div>
                    <div className="buttonHandler">
                        
                        <button className='arrowIcon' value={pagination} onClick={handlerPrevious} > <FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button className='arrowIcon' value={pagination} onClick={handlerNext}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </>
            )}
            {loading && <img id='loading' src='https://i.pinimg.com/originals/bd/b6/76/bdb676999f2be7140bc96a4e50a584b8.gif' alt="Loading" />}
            {error && !loading && (
                <img id="error" src="https://media.tenor.com/CG0fYi2zdkEAAAAM/lost-in-space-retro-tv.gif" alt="error" />
            )}
            {!error && data && (
                <div id='newsContainer'>
                    {data.results.map(item => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.image_url} alt={item.title} />
                            <br />
                            <a id='site' href={item.url}>{item.url}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </main> 

      
      
    )
}

export default Main;