import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = () => {
    const[pirateList, setPirateList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then((res) => {
            setPirateList(res.data)
        })
        .catch((err) => {console.log(err)})
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/pirate/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => {console.log(err)})
    }




  return (
    <div>
        <h1>Pirate Crew</h1>
        <button><Link to={'/create'}>Add Pirate</Link></button>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    pirateList.map((pirate, idx) => {
                        return(
                            <tr key={idx}>
                                <td>{pirate.name}</td>
                                <td><img src={pirate.image} alt="Pirate" height="150px"></img></td>
                                <td><button><Link to={`/details/${pirate._id}`}>View Pirate</Link></button> | <button><Link to={`/update/${pirate._id}`}>Update Pirate</Link></button> | <button className='btn btn-danger' onClick={ (e)=> { window.confirm("Are you sure you want to delete?") && handleDelete(e, pirate._id)}}>Walk the Plank</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}




export default Display