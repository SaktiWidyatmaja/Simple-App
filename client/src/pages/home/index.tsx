// import axios from "axios";
import { Button } from "baseui/button";
import { HeadingXXLarge } from "baseui/typography";
import { useSignOut } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../commons";
import {useIsAuthenticated} from 'react-auth-kit';
import {useAuthUser} from 'react-auth-kit'

function Home() {
  const singOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated()
  const auth = useAuthUser()

  const logout = () => {
    singOut();
    navigate("/login");
  };

  // const getPayment = async () => {
  //   const response = await axios.get("http://localhost:9000/api/v1/payment", {
  //     withCredentials: true,
  //   });
  //   console.log("Response: ", response);
  // };

  return (
    <Container>
      {isAuthenticated() ? 
        <>
          <HeadingXXLarge color="secondary500">Welcome Home!</HeadingXXLarge>
          {/* <Button kind="secondary" onClick={getPayment}>
          Get Payment
          </Button> */}
          <Button kind="secondary" onClick={logout}>
            Logout
          </Button>
        </>
        :
        <>
          <HeadingXXLarge color="secondary500">Hello there!</HeadingXXLarge>
          <Link to="/login">
            <Button kind="secondary">Login</Button>
          </Link>
        </>
      }
      
    </Container>
  );
}

export { Home };
