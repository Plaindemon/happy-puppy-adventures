import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { AuthProvider, useAuth } from "./AuthContext";

const App = () => {
  const [clientProfiles, setClientProfiles] = useState([]);
  const [employeeProfiles, setEmployeeProfiles] = useState([]);
  const dbRef = firebase.database().ref();
  const { currentUser } = useAuth();

  // function to create a new client profile
  const createClientProfile = () => {
    const newClientProfile = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phone: "555-555-5555",
      address: "123 Main St",
      city: "Anytown",
      state: "NY",
      zip: "12345",
      dateOfBirth: "01/01/1990",
      occupation: "Software Engineer",
    };

    dbRef.child("clientProfiles").push(newClientProfile);
  };

  // function to create a new employee profile
  const createEmployeeProfile = () => {
    const newEmployeeProfile = {
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      phone: "555-555-5555",
      address: "456 Elm St",
      city: "Othertown",
      state: "CA",
      zip: "67890",
      dateOfBirth: "02/02/1995",
      position: "Manager",
    };

    dbRef.child("employeeProfiles").push(newEmployeeProfile);
  };

  // function to update a client profile
  const updateClientProfile = (profileId, updatedProfile) => {
    dbRef.child(`clientProfiles/${profileId}`).update(updatedProfile);
  };

  // function to update an employee profile
  const updateEmployeeProfile = (profileId, updatedProfile) => {
    dbRef.child(`employeeProfiles/${profileId}`).update(updatedProfile);
  };

  // function to delete a client profile
  const deleteClientProfile = (profileId) => {
    dbRef.child(`clientProfiles/${profileId}`).remove();
  };

  // function to delete an employee profile
  const deleteEmployeeProfile = (profileId) => {
    dbRef.child(`employeeProfiles/${profileId}`).remove();
  };

  // retrieve all client profiles from Firebase
  const getClientProfiles = () => {
    dbRef.child("clientProfiles").on("value", (snapshot) => {
      const profiles = [];
      snapshot.forEach((childSnapshot) => {
        const profile = childSnapshot.val();
        profile.id = childSnapshot.key;
        profiles.push(profile);
      });
      setClientProfiles(profiles);
    });
  };

  // retrieve all employee profiles from Firebase
  const getEmployeeProfiles = () => {
    dbRef.child("employeeProfiles").on("value", (snapshot) => {
      const profiles = [];
      snapshot.forEach((childSnapshot) => {
        const profile = childSnapshot.val();
        profile.id = childSnapshot.key;
        profiles.push(profile);
      });
      setEmployeeProfiles(profiles);
    });
  };

  useEffect(() => {
    getClientProfiles();
    getEmployeeProfiles();
  }, []);

  return (
    <div>
      <button onClick={createClientProfile}>Create client profile</button>
      <button onClick={createEmployeeProfile}>Create employee profile</button>
    </div>
  );
};
