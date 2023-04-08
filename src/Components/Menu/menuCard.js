import React from 'react'

const MenuCard = ({menudata}) => {  
    console.log(menudata)

  return (
    <div>
        <section className='main-card--container'>
        {
            menudata.map((currElem)=>{
                const {id,name,category,description,image,price} = currElem;
                return (<>
                    <div className='card-container' key={id}>
                        <div className='card'>
                            <div className='card-body'>
                                <span className='card-number card-circle subtitle'>{id}</span>
                                <span className='card-author subtitle'>{category}</span>
                                <h2 className='card-title'>{name}</h2>
                                <span className='card-description subtitle'>
                                {description}
                                </span>
                            <div className='card-read'>{price}</div>
                        </div>
                        <img src={image} alt={name} className='card-media' />
                        <span className='card-tag subtitle'>Order Now</span>
                        </div>
                    </div>
                    </>)
                })} 
                </section>
    </div>
  )
}

export default MenuCard

