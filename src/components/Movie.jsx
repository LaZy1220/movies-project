export function Movie(props) {
    const { Title, Poster, Type, Year } = props
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === 'N/A'
                        ? <img className="activator" src={`https://via.placeholder.com/468x665?text=${Title}`} alt="is not found" />
                        : <img className="activator" src={Poster} alt="is not found" />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Type}</p> <span>{Year}</span>
            </div>
        </div>
    )
}