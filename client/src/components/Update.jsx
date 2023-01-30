import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link} from 'react-router-dom'

const Update = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [treasureChests, setTreasureChests] = useState()
    const [catchPhrase, setCatchPhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [pegLeg, setPegLeg] = useState()
    const [eyePatch, setEyePatch] = useState()
    const [hookHand, setHookHand] = useState()

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + id)
        .then((res) => {
            console.log("This is my update get request: " + res.data)
            const pirate = res.data
            setName(pirate.name)
            setImage(pirate.image)
            setTreasureChests(pirate.treasureChests)
            setCatchPhrase(pirate.catchPhrase)
            setCrewPosition(pirate.crewPosition)
            setPegLeg(pirate.pegLeg)
            setEyePatch(pirate.eyePatch)
            setHookHand(pirate.hookHand)
        })
        .catch(err => console.log("This my update request error: ", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const pirateObj ={name, image, treasureChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand}
        axios.put(`http://localhost:8000/api/pirate/${id}`, pirateObj)
        .then((res) => {
            navigate("/")
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
        <h1>Update Pirate</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Pirate Name:</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}} className='form-control' value={name}></input>
                {
                    name.length < 1 ? <p className='text-danger'>Name required!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Image URL:</label>
                <input type="text" onChange={(e) => {setImage(e.target.value)}} className='form-control' value={image}></input>
                {
                    image.length < 1 ? <p className='text-danger'>Image required!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Treasure Chests:</label>
                <input type="number" onChange={(e) => {setTreasureChests(e.target.value)}} className='form-control' value={treasureChests}></input>
                {
                    treasureChests < 1 ? <p className='text-danger'>Treasure Chests required!</p> : ""
                }
            </div>
            <div className='form-group'>
                <label>Catch Phrase</label>
                <input type="text" onChange={(e) => {setCatchPhrase(e.target.value)}} className='form-control' value={catchPhrase}></input>
                {
                    catchPhrase.length < 1 ? <p className='text-danger'>Catch Phrase required!</p> : ""
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
                    crewPosition.length < 1 ? <p className='text-danger'>Crew Position Required!</p> : ""
                }
            </div>
            <div>
                <label>Peg Leg </label>
                <input type="checkbox" checked={pegLeg} onChange={(e) => {setPegLeg(e.target.checked)}} value={pegLeg}></input>
            </div>
            <div>
                <label>Eye Patch </label>
                <input type="checkbox" checked={eyePatch} onChange={(e) => {setEyePatch(e.target.checked)}} value={eyePatch}></input>
            </div>
            <div>
                <label>Hook Hand</label>
                <input type="checkbox" checked= {hookHand} onChange={(e) => {setHookHand(e.target.checked)}} value={hookHand}></input>
            </div>
            <button type="submit">Update Pirate</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </div>
  )
}

export default Update