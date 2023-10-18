function MovieCard({moviedata}) {
    console.log(moviedata)
    return (
        <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Movie Id  : {moviedata.id}</h5>
          <p className="card-text">Movie Name : {moviedata.title}</p>
          <p className="card-text">Release :{moviedata.release_date} AAA.</p>
          <p className="card-text"> popularity  : {moviedata.popularity}</p>
          <p className="card-text" >Descrpiton : {moviedata.overview}</p>
        </div>
      </div> 
    );
}

export default MovieCard;
