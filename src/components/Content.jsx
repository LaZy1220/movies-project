import { Component } from 'react'
import { Movies } from './Movies'
import { Preloader } from './Preloader'
export class Content extends Component {
    state = {
        movies: []
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
                {movies.length
                    ? (<Movies movies={movies} />)
                    : <Preloader />}
            </div>
        )
    }
}