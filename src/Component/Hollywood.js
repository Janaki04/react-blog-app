import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Createcontext } from "./Createcontext";
export default function Hollywood() {
    
    const [data] = useContext(Createcontext);

    const [load, setLoad] = useState(true);
    const btnclick = () => {

        setLoad(true)
        console.log("hello");

    }
    let store = useNavigate();
    const filterc = data.filter((list) => list.category === "Hollywood")

    return (
        <div>
            <h1 className='latest'>Latest</h1>
            <div className='boxmain'>
                {
                    filterc.filter((value) => load ? value.Id >= 1 : value.Id <= 5).map((items) => {
                        return (
                            <div className='boxlatest' onClick={()=>store(`/category/${items.Id}`)}>
                                <img className='imageslatest' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='titlelatest'> {items.title}</p>
                                    <p className='descriptionlatest'>{items.description}</p>
                                    <p className='categorylatest,datelatest'>{items.category}/{items.date}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <button className='button' onClick={btnclick}>Load More</button>
            <div className="postaddbolly">
                <h2 className='advertise'> Advertisement</h2>



            </div>
            <div className='mainbollywood'>
                <h1>TopPosts</h1>

                {filterc.filter((value) => value.likes >= 100).map((items) => {
                    return (
                        <div className='spacingbolly' onClick={() => store(`/category/${items.Id}`)}>

                            <img className='imagetoppost' src={items.imageurl} alt='' />
                            <div className='straight'>
                                <p> {items.title} </p>
                                <p>{items.description}</p>
                                <p>{items.category}/{items.date}</p>
                               
                            </div>
                            <hr/>

                        </div>


                    )

                })}

            </div>

        </div>
    )
}


