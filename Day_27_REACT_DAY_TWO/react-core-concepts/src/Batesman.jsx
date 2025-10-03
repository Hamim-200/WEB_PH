import { useState } from "react"

export default function Batsman() {

    const playerStyle = {
        border: '2px solid green',
        marginBottom: '20px',
        paddingBottom: '10px'
    }

    const [runs, setRuns] = useState(0);
    const [sixes,setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns)
    }


    return (
        <div style={playerStyle}>
            <h1>Bangladeshi Player</h1>
            <p><small>Total Sixes : {sixes} </small></p>
            {
                runs > 50 && <p>Half Century</p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}
