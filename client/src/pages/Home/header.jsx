import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../styles/home.css";
import { useAuth } from "../../context/useContext";

export default function Header() {
  const auth = useAuth();

  return (
    <header>
      <div>
        <Link to={"/"}>
          <img src="/TeamSphere.svg" alt="TeamSphere Logo" />
        </Link>
      </div>
      <nav>
        <Link to={"#home"}>Home</Link>
        <Link to={"#features"}>Features</Link>
        {auth?.isLoggedIn && auth?.user ? (
          <Button className="button" variant="contained" href="logout">
            logout
          </Button>
        ) : (
          <Button className="button" variant="contained" href="login">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}
