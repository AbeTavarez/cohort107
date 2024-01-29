import { useState } from "react";
import Button from "./Button";

function CreateLearnerForm({ setLearners, learners }) {
  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
    scores: [],
  });

  const handleChange = (e) => {
    setNewLearner({
      ...newLearner,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLearner);
    setLearners([newLearner, ...learners]);
    setNewLearner({
      name: "",
      bio: "",
      scores: [],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={newLearner.name}
          onChange={handleChange}
        />

        <label htmlFor="bio">Bio: </label>
        <textarea
          name="bio"
          id="bio"
          value={newLearner.bio}
          onChange={handleChange}
        ></textarea>

        <Button type="submit">Create new Learner</Button>
        {/* <button type="button">Create new Learner</button> */}
      </form>
    </div>
  );
}

export default CreateLearnerForm;
