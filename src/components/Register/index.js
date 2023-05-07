import react from "react";
import Signup from "./Signup";
// import Login from "./Login";

import { Container} from "react-bootstrap";

function Registration() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
          <div className="w-100" style={{ maxWidth: '400px' }}>
               <Signup />
          </div>
          
          {/* <div className="w-100" style={{ maxWidth: '400px' }}>
               <Login />
          </div> */}
       
      </Container>
    </>
  );
}

export default Registration;
