import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import Container from "../Container/Container";
// import CustomInput from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// // custom

// const Signup = () => {
//       {/* <Container class1="login-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Sign Up</h3>
//               <div className="d-flex flex-column gap-15">
//                 <CustomInput
//                   type="email"
//                   placeholder="Email"
//
//                 />

//                 <CustomInput
//                   type="password"
//                   placeholder="Password"
//
//                 />

//                 <CustomInput
//                   type="password2"
//                   placeholder="Password2"
//
//                 />

//                 <div>
//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     <button className="button border-0" onClick={handleSave}>
//                       Sign Up
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container> */}
//     </>
//   );
// };

// export default Signup;

function Signup() {
  const { handleRegister, error, setError, loading } = useContext(authContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    setError(false);
  }, []);

  function handleSave() {
    if (!email.trim() || !password.trim() || !password2.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    console.log(email, password, password2);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);
    handleRegister(formData, navigate);
  }

  if (loading) {
    return <h2>Loader</h2>;
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password2"
          placeholder="Password2"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSave}>
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
