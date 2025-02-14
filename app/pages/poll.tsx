import React, { useEffect, useState } from "react";
import Question from "@/components/question";
import Dashboard from "@/components/dashboard";
import { useRouter } from "next/router";


function Poll() {
    const router = useRouter();

    console.log(router);

    const defData = {
        'question': 'Your favourite color?',
        'options': ['Red', 'Green', 'Blue'],
    };

    const [pollData, setPollData] = useState(defData);
    const [votes, setVotes] = useState({});

    useEffect(() => {
        console.log(router);
        if (router.isReady) {
            const data = router.query.slug;
            if (data) {
                try {
                    // Ensure slug data is base64 encoded before decoding it
                    const decodedData = JSON.parse(atob(data)); 
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
        }
    }, [router.isReady, router.query.slug]);

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
