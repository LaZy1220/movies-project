import { useEffect } from 'react';
import { useState } from 'react';
import { Movies } from './Movies'
import { Preloader } from './Preloader'
import { Search } from './Search'

const API_KEY = process.env.REACT_APP_API_KEY;

export function Content(){
    const [movies,setMovies]= useState([])
    const [isLoading,setIsLoading] = useState('true')

   const findMovies = (str,type='all') => {
        setIsLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&S=${str}${type === 'all'?'': `&type=${type}`}`)
            .then(response => response.json())
            .then(data=>{
                setMovies(data.Search); 
                setIsLoading(false)
            })
    }
    useEffect(()=>{ 
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&S=avengers`)
            .then(response => response.json())
            .then(data =>{
                setMovies(data.Search);
                setIsLoading(false)
            })
            .catch((err)=>{
                console.error(err)
                setIsLoading(false)
    })},[])
        return (
            <div className='content conteiner'>
                <Search findMovies={findMovies} />
                {isLoading
                    ? <Preloader />
                    : (<Movies movies={movies} />)}
            </div>
        )
    }