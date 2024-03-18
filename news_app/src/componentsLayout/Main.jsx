import React, { useEffect, useState } from "react";
//import useLocalStorage from 'use-local-storage';
import { useTheme, useThemeUpdate} from './LightDarkTheme';

const Main = ({fetchData}) => {
    const [data, setData] = useState(null);
    const [orderBy, setOrderBy] = useState('');
    const [pagination, setPagination] = useState('published_at');
const [value, setValue] = useState('');
//const [isDark, setIsDark] = useLocalStorage('isDark', false);
const [loading, setLoading] = useState(false);
const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
  

useEffect(() => {
        fetchAPI();
    }, [pagination,orderBy]);

    const fetchAPI = async () => {
        try {
            setLoading(true);
            const api = await fetchData(pagination,orderBy);
            if (!api.data) {
                console.error('no API data', api);
                return;
            }
            console.log(api.data, 'render useEffect');
            setData(api.data);
            setLoading(false);
        } catch (error) {
            console.error('Error api', error);
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

const handlerSearch = async()=>{
    try{
        const searchResults = await fetchData('search', value, setLoading);
    setData(searchResults.data)
    console.log(searchResults.data,'search')
    }catch(error){
        console.log(error);
    }

}



const handlerInput = (e)=>{
    setValue(e.target.value);

}
    



const toggleDarkMode = () => {
      toggleTheme();
    };

    return (
      

 <main className={darkTheme ? 'dark-mode' : 'light-mode'}>
        <button id="darkButton" onClick={toggleDarkMode}>Dark Mode</button>          
<div id='mainContainer' >
            <div id="searchContainer"> 
            <input 
        type="text"
        placeholder="Search Here"
    value={value}
    onChange={handlerInput}
    className='search-input'>
        </input>
        <button id='button-ok'onClick={handlerSearch}>Ok</button>
        </div>
            <div>
                <label id="order">Order By:</label>
                <select value={orderBy} onChange={handlerOrder}>
                    <option value='-published_at'>Recent</option>
                    <option value='published_at'>Older</option>
                </select>
            </div>
            <div className="buttonHandler">
                <button id='previous' value={pagination} onClick={handlerPrevious}>Previous</button>
            <button id='next' value={pagination} onClick={handlerNext}>Next</button>
            </div>
            
            {loading && <img id='loading'src='https://i.pinimg.com/originals/bd/b6/76/bdb676999f2be7140bc96a4e50a584b8.gif' alt="Loading" />}

            <div id='newsContainer'>
                {data && data.results.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.image_url} alt={item.title}/>
                        <br>
                        </br>
                        <a id='site'href={item.url}>{item.url}</a>
                    </div>
                ))}
            </div>
        </div>
    </main> 

      
      
    )
}

export default Main;