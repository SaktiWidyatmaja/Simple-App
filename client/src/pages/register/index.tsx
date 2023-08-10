// function Register(props: any) {}

// export { Register };

import { Button } from "baseui/button";
import {
  HeadingXXLarge,
} from "baseui/typography";
import {
  Container,
  ErrorText,
  InnerContainer,
  InputWrapper,
  StyledInput,
} from "../commons";

// import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(props: any) {
  const navigate = useNavigate(); // Get the navigate function
  const [error, setError] = useState("");
  // const signIn = useSignIn();

  const onSubmit = async (values: any) => {
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        values
      );
      console.log(response);
      // signIn({
      //   token: response.data.token,
      //   expiresIn: 3600,
      //   tokenType: "Bearer",
      //   authState: { email: values.email },
      // });

      navigate("/login");
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Container>
      <InnerContainer>
        <form onSubmit={formik.handleSubmit}>
          <HeadingXXLarge>Create Account</HeadingXXLarge>
          <ErrorText>{error}</ErrorText>
          <InputWrapper>
            <StyledInput
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              clearOnEscape
              size="large"
              type="email"
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Username"
              clearOnEscape
              size="large"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              clearOnEscape
              size="large"
              type="password"
            />
          </InputWrapper>
          <InputWrapper>
            <Button size="large" kind="primary" isLoading={formik.isSubmitting}>
              Register
            </Button>
          </InputWrapper>
          <InputWrapper>
            <p style={{ textAlign: 'right', color: 'white' }}>
              Already have an account? <Link to="/login">login</Link>
            </p>
          </InputWrapper>
        </form>
      </InnerContainer>
    </Container>
  );
}

export { Register };
