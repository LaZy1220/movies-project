import { Component } from "react";

export class Search extends Component {
    state = {
        search: '',
        type:'all'
    }
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.findMovies(this.state.search)
        }
    }
    handleCheck=(event)=>{
        this.setState(({type:event.target.dataset.type}),()=>{
            this.props.findMovies(this.state.search,this.state.type)
        })
    }
    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="search"
                        type="search"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(event) => this.setState({ search: event.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        onClick={() => this.props.findMovies(this.state.search,this.state.type)}
                        className="btn bnt-search"
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                    <input
                        className="with-gap" 
                        name="type" 
                        type="radio"
                        data-type="all"
                        onChange={this.handleCheck}
                        checked={this.state.type==='all'}/>
                    <span>All</span>
                    </label>
                    <label>
                    <input
                        className="with-gap" 
                        name="type" 
                        type="radio"
                        data-type="movie"
                        onChange={this.handleCheck}
                        checked={this.state.type==='movie'}/>
                    <span>Movies</span>
                    </label>
                    <label>
                    <input
                        className="with-gap" 
                        name="type" 
                        type="radio"
                        data-type="series"
                        onChange={this.handleCheck}
                        checked={this.state.type==='series'}/>
                    <span>Series</span>
                    </label>
                    
                </div>
            </div >
        )
    }
}