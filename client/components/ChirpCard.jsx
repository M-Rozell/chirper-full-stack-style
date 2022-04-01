import React from 'react'

const ChirpCard = ({ name, content, location, created, handleDelete }) => {
    return (
        <>
            <form className='containter mt-3'>
                <div className="col-md-4 mb-5 border solid black 3px">
                    <div className="card shadow p-1 bg-white rounded">
                        <div className="card-body">
                            <h3>{name}</h3>
                            <p>{content}</p>
                            <h5>{location}</h5>
                            <h6>{created}</h6>
                            <button className='btn-warning' onClick={handleDelete}>Delete</button>
                            
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ChirpCard;