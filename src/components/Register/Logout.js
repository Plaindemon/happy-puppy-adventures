import React from "react";
import { Card } from "react-bootstrap";

function Logout() {
  return (
    <>
      <Card></Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Logout;
