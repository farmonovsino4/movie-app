import './movies-add-form.css'

const MoviesAddForm = () => {
  return (
    <div className="movie-add-form">
        <h3>Yangi kino ko'rish</h3>
        <form action="" className='add-form d-flex'>
            <input type="text" className='form-control new-post-labe' placeholder='Qanday kino'/>
            <input type="number" className='form-control new-post-labe' placeholder="Nechi marotaba ko'rilgan "/>
            <button type="submit" className="btn btn-outline-dark">
                Qo'shish
            </button>
        </form>
    </div>
  )
}

export default MoviesAddForm