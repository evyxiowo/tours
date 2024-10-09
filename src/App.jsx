import { useEffect, useState } from "react";
import Loading from "./comps/Loading";
import Tour from "./comps/Tour";
import Tours from "./comps/Tours";

const url = 'https://www.course-api.com/react-tours-project';


const App = () => {
  const [ loading , setLoading] = useState(true);
  const [ tours, setTours ] = useState(([]));

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json()
      setTours(tours)
      
    } catch (error) {
      console.error("Eroor");
      
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchTours();
  }, [])

  loading? <main> <Loading/> </main>: null;
  return(
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
      
    </main>
  )
};
export default App;
