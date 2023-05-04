import React, { useState } from "react";
import { Alert, Card, Button } from "react-bootstrap";
import Logout from "../Register/Logout";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function LogoutButton() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}

export default LogoutButton;
