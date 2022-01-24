import React, { Createcontext } from './Createcontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Travelimg() {
    
    const [data] = useContext(Createcontext);
    let store=useNavigate()
    return (
        <div className='travelimage'>
            {data.filter((value) => value.Id ==='7').map(items =>
            
                <div  key={items.Id}className='disp2'  onClick={() => store(`/category/${items.Id}`)}>  
                    <img className='bigimg' src={items.imageurl} alt=''/>
                    <div className='datamove'>
                        <p> {items.title} </p>
                        <p>{items.description}</p>
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
            
        </div>
    )
}