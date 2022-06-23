import { useState } from "react"

export function Search (props) {
    const{findMovies}=props
    const [search,setSearch]=useState('')
    const [type,setType]=useState('all')
    const handleKey = (event) => {
        if (event.key === 'Enter') {
            findMovies(search)
        }
    }
    const handleCheck=(event)=>{
        setType(event.target.dataset.type)
        findMovies(search,type)
    }
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="search"
                        type="search"
                        placeholder="Enter the name of the movie here"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button
                        onClick={() => props.findMovies(search,type)}
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
                        onChange={handleCheck}
                        checked={type==='all'}/>
                    <span>All</span>
                    </label>
                    <label>
                    <input
                        className="with-gap" 
                        name="type" 
                        type="radio"
                        data-type="movie"
                        onChange={handleCheck}
                        checked={type==='movie'}/>
                    <span>Movies</span>
                    </label>
                    <label>
                    <input
                        className="with-gap" 
                        name="type" 
                        type="radio"
                        data-type="series"
                        onChange={handleCheck}
                        checked={type==='series'}/>
                    <span>Series</span>
                    </label>
                    
                </div>
            </div >
        )
    }