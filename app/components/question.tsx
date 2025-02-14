import React, { useState } from "react";

function Question({question, options, onVote}){
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleVoteClick = () => {
        if(selectedOption){
            onVote(selectedOption);
        }
        else{
            alert('Please select an option before voting');
        }
    };

    return(
        <div>
            <h2>{question}</h2>
            {options.map((option, index) => (
                <div key={index}>
                    <label>
                        <input 
                        type = 'radio'
                        name = 'option'
                        value = {option}
                        checked = {selectedOption === option}
                        onChange={handleOptionChange}
                        />
                        {option}
                    </label>
                </div>
            ))}
            <button onClick={handleVoteClick}>Vote</button>
        </div>
    )
}


export default Question;