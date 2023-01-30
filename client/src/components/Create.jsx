import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [treasureChests, setTreasureChests] = useState(0)
    const [catchPhrase, setCatchPhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const pirateObj = {name, image, treasureChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand}
        axios.post(`http://localhost:8000/api/pirates`, pirateObj)
        .then(res => {
            navigate('/')
        })
        .catch(err =>{
        console.log("This is our create page catch error:", err)
        const errorResponse = err.response.data.errors; 
        const errorArr = []; 
        for (const key of Object.keys(errorResponse)) {
        errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
    })            
}







  return (
    <div>
        <button><Link to={'/'}>Crew Board</Link></button>
        <h1>Add Pirate</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Pirate Name:</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}} className='form-control'></input>
                {
                    name.length < 3 && name.length > 0 ? <p className='text-danger'>Name must be 3+ characters!!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Image URL:</label>
                <input type="text" onChange={(e) => {setImage(e.target.value)}} className='form-control'></input>
                {
                    image.length < 3 && image.length > 0 ? <p className='text-danger'>Image must be 3+ characters!!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Treasure Chests:</label>
                <input type="number" onChange={(e) => {setTreasureChests(e.target.value)}} className='form-control'></input>
                {
                    treasureChests < 1 && treasureChests !== 0 ? <p className='text-danger'>Treasure Chests must be positive!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Catch Phrase</label>
                <input type="text" onChange={(e) => {setCatchPhrase(e.target.value)}} className='form-control'></input>
                {
                    catchPhrase.length < 3 && catchPhrase.length > 0 ? <p className='text-danger'>Catch Phrase must be 3+ characters!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Crew Position</label>
                <select className='form-group' value={crewPosition} onChange={e => setCrewPosition(e.target.value)}>
                        <option value="" disabled selected>Select Your Option</option>
                        <option value="Captain">Captain</option>
                        <option value="Quarter_Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder_Monkey">Powder Monkey</option>
                </select>
                {
                    crewPosition.length < 1  ? <p className='text-danger'>Crew Position Required!</p> : ""
                }
            </div>
            <div>
                <label>Peg Leg </label>
                <input type="checkbox" checked={pegLeg} onChange={(e) => {setPegLeg(e.target.checked)}}></input>
            </div>
            <div>
                <label>Eye Patch </label>
                <input type="checkbox" checked={eyePatch} onChange={(e) => {setEyePatch(e.target.checked)}}></input>
            </div>
            <div>
                <label>Hook Hand</label>
                <input type="checkbox" checked= {hookHand} onChange={(e) => {setHookHand(e.target.checked)}}></input>
            </div>
            <button type="submit">Add Pirate</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </div>
  )
}

export default Create