import { useRouter } from 'next/router';
import React, { useState } from 'react';

function encodeData(data){
    const encodedData = btoa(JSON.stringify(data));
    const safeEncodedData = encodeURIComponent(encodedData);

    return safeEncodedData;
}


const Admin: React.FC = () => {

    const router = useRouter();

    // const link = '';
    const [link, setLink] = useState('');


    // at this point we'll have to start socket server
    const handlePoll = () => {
        const pollData = {
            question: 'Your favorite color?',
            options: ['Red', 'Blue', 'Green'],
          };

        const encodedData = encodeData(pollData);
        //   const encodedData = 'abc';

        setLink(`http://localhost:3000/poll/${encodedData}`); // some link to poll        
    }


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
            <button onClick={handlePoll}>create poll link</button>
            <div>
              {link ? <a href={link}>link</a> : <a>no link</a>}
            </div>
        </div>
        <div>
            <button onClick={handleClick}>click kar</button>
        </div>
    </div>
  );
};

export default Admin;
