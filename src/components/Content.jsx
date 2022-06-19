import { Component } from 'react'
import { Movies } from './Movies'
import { Preloader } from './Preloader'
import { Search } from './Search'
const API_KEY = process.env.REACT_APP_API_KEY;
export class Content extends Component {
    state = {
        movies: [],
        isLoading:true,
    }
    findMovies = (str,type='all') => {
        this.setState({isLoading:true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&S=${str}${type === 'all'?'': `&type=${type}`}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, isLoading:false }))
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&S=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search,isLoading:false }))
            .catch((err)=>{
                console.error(err)
                this.setState({isLoading:false})
            })
    }
    render() {
        const { movies,isLoading } = this.state
        return (
            <div className='content conteiner'>
                <Search findMovies={this.findMovies} />
                {isLoading
                    ? <Preloader />
                    : (<Movies movies={movies} />)}
            </div>
        )
    }
}