import axios from 'axios';


const URL1 = 'https://api.spaceflightnewsapi.net/v4/articles';
const URL2='https://api.spaceflightnewsapi.net/v4/blogs';
const URL3='https://api.spaceflightnewsapi.net/v4/reports';

export const fetchArticles = async(pagination=0, orderBy='', setLoading) =>{
    try{
        setLoading(true);
        const response = await axios.get(`${URL1}?limit=10&offset=${pagination}&ordering=${orderBy}`);
setLoading(false);
        return response;
    }catch(error){
console.error('Error Fectch articles',error);
throw error;
    }
}


export const fecthBlogs = async(pagination=0, orderBy='', setLoading) =>{
    try{
        setLoading(true);
        const response = await axios.get(`${URL2}?limit=10&offset=${pagination}&ordering=${orderBy}`);
        setLoading(false);
        return response;
    }catch(error){

        console.error('Error fetch blogs' , error);
        throw error;
    }
}

export const fetchReports =  async(pagination=0, orderBy='', setLoading)=>{
    try{
        setLoading(true);
        const response = await axios.get(`${URL3}?limit=10&offset=${pagination}&ordering=${orderBy}`);
        setLoading(false);
        return response;
    }catch(error){
        console.error('Error fetch reports', error);
        throw error;
    }

}
