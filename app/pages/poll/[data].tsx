import React, { useEffect, useState } from "react";
import Question from "@/components/question";
import Dashboard from "@/components/dashboard";
import { useRouter } from "next/router";


function decodeData(data){
    const decodedData = decodeURIComponent(data);
    const jsonData = JSON.parse(atob(decodedData));
    return jsonData;
}

function Poll() {
    const router = useRouter();
    const {data} = router.query;

    const defData = {
        'question': 'Question?',
        'options': ['A', 'B', 'C', 'D'],
    };

    const [pollData, setPollData] = useState(defData);
    const [votes, setVotes] = useState({
        'A':0,
        'B':0,
        'C':0,
        'D':0
    });

    useEffect(() => {
        // connect to ws server

        if (data) {
            try {
                const decodedData = decodeData(data); 
                setPollData(decodedData);

                const initialVotes = decodedData.options.reduce((acc, option) => {
                    acc[option] = 0;
                    return acc;
                }, {});
                setVotes(initialVotes);
            
            } catch (error) {
                console.error("Failed to decode or parse data: ", error);
            }
        }
    }, [data]);


    // handleVote will be done at server side later
    const handleVote = (selectedOption) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [selectedOption]: prevVotes[selectedOption] + 1,
        }));
    };


    return (
        <div>
            <h1>Vote here</h1>
            <Question
                question={pollData.question}
                options={pollData.options}
                onVote={handleVote}
            />
            <Dashboard votes={votes} />
        </div>
    );

}

export default Poll;
