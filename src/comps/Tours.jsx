import Tour from "./Tour"

const Tours = ({tours , removeTour}) => {
  return (
    <div>
        {tours.map((list) =>{
            return <Tour key={list.id} {...list} removeTour={removeTour}/>
        })}
    </div>
  )
}
export default Tours