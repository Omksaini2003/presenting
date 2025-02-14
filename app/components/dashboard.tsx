import React from "react"

function Dashboard({votes}) {
    return(
        <div style={{border: "2px solid black"}}>
            <h3>Results</h3>

            {Object.keys(votes).map((option) => (
                <p key={option}>
                    {option} : {votes[option]} votes
                </p>
            ))}
        </div>
    )
}

export default Dashboard