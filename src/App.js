import './App.css';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import Axios from "axios";
// import { createContext } from 'react';
// export const MyContext = createContext("");
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
function App() {

  const [name,setName]=useState("");
  const [movieInfo,setmovieInfo]=useState();
  console.log( movieInfo)  

  const handleClick=(e)=>{
    e.preventDefault();

   
      Axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,{
        headers:{
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTVkN2NjMjVjZGUwOTU2YmU4NjFiNzY5NWUwNzg3ZSIsInN1YiI6IjYwYjRiN2ZlZGQ5MjZhMDA2ZDg5MzZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ssX82A-wf-WBwnNrWb79teOtHFGbhTMa7DFD6dEotU'
        }
      })
      .then(res => {
         setmovieInfo(res.data.results);
         setName("");
         console.log(res.data.results);
      });
      
}
  return (
    
    <div className="App">
      <Navbar />
      {/* main box part to fetch movie and list  */}
      <main className='my-bg-color '>
        <div className='w-50 mx-auto'>
          <form>
           <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Enter a Movie Name</label>
            <input 
             value={name}
             onChange={(e)=>setName(e.target.value)}
             type="name" className="form-control" id="exampleFormControlInput1" placeholder="Movie name..." />
          </div>
          <button onClick={handleClick} type="button" className="btn btn-primary">Enter </button>
          </form>
         </div>


          {/* showing movie details part  */}
         <div className='movie-info w-50 mt-5 mt-4 mx-auto'>
            
            {
              movieInfo &&  movieInfo?.map((item,index)=>{
                return (
                  <MovieCard key={index}  moviedata={item} />
                )
              })
             
            }
            
         </div>

      </main>

    </div>
  );
}

export default App;
