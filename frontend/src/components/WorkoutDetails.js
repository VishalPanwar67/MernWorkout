import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }
    return (
        <div className="workout-details" >
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <i class="fa-solid fa-trash-can-xmark"></i>
            <span onClick={handleClick} className="delete" >Delete</span>
            
        </div>
    )
}

export default WorkoutDetails