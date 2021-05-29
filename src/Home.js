import {useState} from 'react';
const Home = () => {
    const[name,setName] = useState('Didula');
    const[age,setAge] = useState(22);

    const handleClick= (name)=>{
        console.log("Success ");
        setName('Tharusha');
        setAge(23);
    }

    return ( 

        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;

<div className="home"></div>