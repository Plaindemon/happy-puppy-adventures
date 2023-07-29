import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Alert, Form, Button } from "react-bootstrap";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

import "../../styles/Profile.css"

firebase.initializeApp({
  // Firebase config object
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const db = firebase.firestore();

function ProfileForm() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [education, setEducation] = useState("");
  const [languages, setLanguages] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [profileSubmitted, setProfileSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
    console.log(user);
    // Get user's profile data from Firestore and set the state
    const getUserProfile = async () => {
      const docRef = doc(db, "profiles", user.uid);
      console.log(docRef);
      const docSnap = await getDoc(docRef);

      console.log(docSnap);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setName(data.name || "");
        setAge(data.age || "");
        setLocation(data.location || "");
        setJob(data.job || "");
        setHobbies(data.hobbies || "");
        setEducation(data.education || "");
        setLanguages(data.languages || "");
        setAboutMe(data.aboutMe || "");
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    if (user) {
      getUserProfile();
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Update user's profile data in Firestore
      const docRef = doc(db, "profiles", user.uid);
      await setDoc(
        docRef,
        {
          name,
          age,
          location,
          job,
          hobbies,
          education,
          languages,
          aboutMe,
        },
        { merge: true }
      );
      setProfileSubmitted(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  if (!user) {
    return <div>Please log in to access your profile.</div>;
  }

  return (
    <div>
      <h2 className="profile-h2">Profile Form</h2>
      {profileSubmitted ? (
        <div>Your profile has been updated.</div>
      ) : (
        <Form onSubmit={handleSubmit} className="profile-form">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Label htmlFor="age">Age:</Form.Label>
          <Form.Control
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <Form.Label htmlFor="location">Location:</Form.Label>
          <Form.Control
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Form.Label htmlFor="job">Job:</Form.Label>
          <Form.Control
            type="text"
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />

          <Form.Label htmlFor="hobbies">Hobbies:</Form.Label>
          <Form.Control
            type="text"
            id="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />

          <Form.Label htmlFor="education">Education:</Form.Label>
          <Form.Control
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />

          <Form.Label htmlFor="languages">Languages:</Form.Label>
          <Form.Control
            type="text"
            id="languages"
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />

          <Form.Label htmlFor="aboutMe">About Me:</Form.Label>
          <Form.Control
            id="aboutMe"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />

          {/* <Form.Label htmlFor="interests">Interests:</Form.Label>
          <Form.Control
            type="text"
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          /> */}

          {/* <Form.Label htmlFor="goals">Goals:</Form.Label>
          <Form.Control
            type="text"
            id="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          /> */}

          {/* <Form.Label htmlFor="profilePicture">Profile Picture:</Form.Label>
          <Form.Control
            type="text"
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          /> */}

          <Button type="submit" className="profile-submit-btn">Submit</Button>
        </Form>
      )}
    </div>
  );
}

export default ProfileForm;
