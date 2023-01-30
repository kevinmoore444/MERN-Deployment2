import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'

const Details = () => {
    const [pirate, setPirate] = useState("")
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
        .then((res) => setPirate(res.data))
        .catch((err) => console.log('This is our detail page: ' + err))
    }, [id])


  return (
    <div>
        <button><Link to={'/'}>Crew Board</Link></button>
        <h1>{pirate.name}</h1>
        <h3>"{pirate.catchPhrase}"</h3>
        <img src={pirate.image} alt="Pirate" height="450px"></img>
        <h4>Position: {pirate.crewPosition}</h4>
        <h5>Treasure Chests: {pirate.treasureChests}</h5>
        <h5>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</h5>
        <h5>Eye Patch: {pirate.eyePatch ? "Yes" : "No"} </h5>
        <h5>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</h5>
    </div>
  )
}

export default Details