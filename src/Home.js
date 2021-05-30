import {useState} from 'react';
const Home = () => {
    const[blogs,setBlogs] = useState([
        {title: 'Getting started with github',body:'Install github...',author:'Tharusha',id:1},
        {title :'Getting started with mongoDB',body:'Login with mongodb...',author:'Didula',id:2},
        {title:'Getting started with nodejs',body:'Install nodejs... ',author:'Pamal',id:3}
        ]);
    

    

    return ( 

        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview"key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))}
            
        </div>
     );
}
 
export default Home;

<div className="home"></div>