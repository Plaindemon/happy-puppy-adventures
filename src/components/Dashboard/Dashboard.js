import React, { useState } from "react";
import { Alert, Card } from "react-bootstrap";
import Logout from "../Register/Logout";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <Logout />
    </>
  );
}

export default Dashboard;
