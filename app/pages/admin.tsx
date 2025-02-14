import React, { useState } from 'react';

// Define the Admin page component
const Admin: React.FC = () => {

    // const link = '';
    const [link, setLink] = useState('');

    const handlePoll = () => {
        const pollData = {
            question: 'Your favorite color?',
            options: ['Red', 'Blue', 'Green'],
          };
      
        // Convert poll data to JSON and then Base64 encode it
        const encodedData = btoa(JSON.stringify(pollData));
        
        setLink(`http://localhost:3000/poll?data=${encodedData}`); // some link to poll
        // setLink(`http://localhost:3000/poll`); // some link to poll
        console.log('hehe');
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
    </div>
  );
};

export default Admin;
