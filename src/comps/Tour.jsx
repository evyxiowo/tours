const Tour = ({id, image, info , name , price, removeTour}) => {
  return (
    <article>
        <img src={image} alt={name} />
        <span>${price}</span>
        <div>
            <h5>{name}</h5>
            <p>{info}</p>
            <button onClick={()=>{removeTour(id)}}>Remove</button>
        </div>
    </article>
  )
}
export default Tour