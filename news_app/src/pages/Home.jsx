import {Swiper, SwiperSlide} from 'swiper/react';
import  './Home.css';

const Home = ()=>{

const data =[
            
        {id:1, title: 'Articles', image:'https://images.ctfassets.net/mrbo2ykgx5lt/40413/50de85e244702528a7d39eebd9e7469c/main-image-blog.png?&w=1056&fm=jpg'},
        {id:2, title:'Blogs', image:'https://www.popsci.com/uploads/2023/01/05/boeing-starliner-nasa2.jpg?auto=webp&width=1440&height=942.48'},
        {id:3, title: 'Reports', image:'https://www.popsci.com/uploads/2024/02/20/bright-black-hole.png?auto=webp&optimize=high&crop=2:1&width=765'},
        {id:4, title: 'Launches' , image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1x1Haczu3x8bHjujmt9TdbzwEJP1g-lGeA&usqp=CAU'}
]



return(
        <main>
                <div className='home-content'>
                     <div className='containerSlider'>
 <Swiper 
 slidesPerView={2}
 spaceBetween={50}
 pagination={{clickable:true}}
 navigation
 >   
    
{data.map((item) => (
        <SwiperSlide >
                <p>{item.title}</p>
                <img id='sliderImage'src={item.image} alt={item.title}/>
</SwiperSlide>

))}     

        </Swiper>

        </div>      
                </div>
              
        </main>
       
     
       

)

}

export default Home;