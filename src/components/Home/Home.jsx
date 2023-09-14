/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [allActors , setAllActors] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [reaming, setReaming] = useState(0)
    const [totalCost, setTotalCost] = useState()

        useEffect(() => {
            fetch('data.json')
            .then(response => response.json())
            .then(data => setAllActors(data))
        },[])
        const handleSelectActor = (actor) => {
            const isExist = selectedActors.find(item => item.id==actor.id)
            let count = actor.salary
            if(isExist){
                return(
                    alert('Already booked')
                )
            }
            else{

            selectedActors.forEach(item => {
                count = count + item.salary

            })
            // console.log(count)
            const totalReaming = 20000 - count
            
            
            if(count > 20000){
                    return(
                        alert('money will never run out')
                    )
            }
            else{
                setTotalCost(count)
            setReaming(totalReaming)
                setSelectedActors([...selectedActors, actor])
            }
            }
        
        }
        // console.log(selectedActors)

// console.log(allActors)
    return (
        <div className="container">
            <div className='home-container'>
            <div className='card-container'>
            {
                allActors.map((actor)  =>  ( 
                    <div key={actor.id} className='card'>
                <div className="card-img">
                    <img className='photo' src={actor.image} alt="" />
                </div>
                <h2>{actor.name}</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, possimus?</small></p>
                <div className='info'>
                    <p>salary: {actor.salary}$ </p>
                    <p>{actor.role}</p>
                </div>
                <button onClick={() =>handleSelectActor(actor)} className='select-button'>Select</button>

            </div>
                ))
            }
            </div>
            <div className='cart'>
    
                <Cart selectedActors= {selectedActors} reaming = {reaming} totalCost = {totalCost}></Cart>

            </div>
            </div>
        </div>
    );
};

export default Home;