import { useEffect } from "react"
import { Cards } from "./cards"

//use events actions hook
import { useAction } from '../store/events/action'

export const Homepage: React.FC = () => {
    const { fetchEvents } = useAction()
    // call on render
    useEffect(()=>{
        fetchEvents()
    },[])
    return(
        <div className="homepage-grid">
            <Cards />
        </div>
    )
}