import { Component } from 'react'
import { Movies } from './Movies'
import { Preloader } from './Preloader'
import { Search } from './Search'
export class Content extends Component {
    state = {
        movies: []
    }
    findMovies = (str,type='all') => {
        fetch(`http://www.omdbapi.com/?apikey=c5798af6&S=${str}${type === 'all'?'': `&type=${type}`}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=c5798af6&S=matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {
        const { movies } = this.state
        return (
            <div className='content conteiner'>
                <Search findMovies={this.findMovies} />
                {movies.length
                    ? (<Movies movies={movies} />)
                    : <Preloader />}
            </div>
        )
    }
}