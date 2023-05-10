import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');
    const[emptyfields, setEmptyfields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'Post',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyfields(json.emptyfields)

        }
        if (response.ok) {
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            setEmptyfields([])
            console.log("New workout added", json);
            dispatch({ type: 'CREATE_WORKOUT', payload: json})
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit} >
            <h3>Add a New Network</h3>
            <label>Excersize Title:</label>
            <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyfields.includes('title')?'error':''}
            />

            <label>Load (in kg):</label>
            <input type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyfields.includes('load') ? 'error' : ''}
            />

            <label>Reps:</label>
            <input type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyfields.includes('reps') ? 'error' : ''}
            />

            <button>Add WorkOut</button>
            {error && <div className="error">{error}</div>}

        </form>

    )
}

export default WorkoutForm