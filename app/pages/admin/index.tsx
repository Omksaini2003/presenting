import Dashboard from "@/components/dashboard";
import PollForm from "@/components/pollForm";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function encodeData(data) {
  const encodedData = btoa(JSON.stringify(data));
  const safeEncodedData = encodeURIComponent(encodedData);

  return safeEncodedData;
}

const Admin: React.FC = () => {
  const router = useRouter();

  const defData = {
    question: "Question?",
    options: ["A", "B", "C", "D"],
  };

  const [pollData, setPollData] = useState(defData);

  // const link = '';
  const [link, setLink] = useState("");

  // at this point we'll have to start socket server
  useEffect(() => {
    const encodedData = encodeData(pollData);
    setLink(`http://localhost:3000/poll/${encodedData}`); // some link to poll
  }, [pollData]);

  const handleClick = () => {
      router.push('/exp/123');

      // router.push({
      //   pathname: '/exp',
      //   query: {id: 123},
      // });
  }

  return (
    <div>
      <h1>Welcome to the Admin page!</h1>
      <div id="poll">
        <PollForm onPollSubmit={setPollData} />
        {/* <button onClick={createPoll}> create a poll </button> */}
        {/* <button onClick={handlePoll}>create poll link</button> */}
        <div>{link ? <a href={link}>link</a> : <a>no link</a>}</div>
      </div>


      {/* <div>
            <button onClick={handleClick}>click kar</button>
        </div> */}
    </div>
  );
};

export default Admin;
