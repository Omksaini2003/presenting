import { useState } from "react";

const PollForm = ({ onPollSubmit }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, e) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = options.filter((_, i) => i != index);
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPollSubmit({question, options});
  };

  return (
    <form style={{border: "2px solid black"}}>
      <div>
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Enter the question"
            required
          />
        </label>
      </div>

      <div>
        <label>Options: </label>
        {options.map((option, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e)}
              placeholder={`Option ${index + 1}`}
              required
            />

            {/* remove button */}
            {options.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveOption(index)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {/* add button */}
        <button
          type="button"
          onClick={handleAddOption}
          style={{ marginTop: "10px" }}
        >
          Add Option
        </button>
      </div>

      <div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default PollForm;
