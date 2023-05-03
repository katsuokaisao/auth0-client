import Logo from "../atoms/Logo";
import SignUpButton from "../atoms/SignUpButton";
import LoginButton from "../atoms/LoginButton";
import DropDownMenu from "../molecules/DropDownMenu";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  if (isLoading) {
    return (
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <Logo></Logo>
            <ul className="flex items-center space-x-4">
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  if (isAuthenticated && user) {
    return (
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <Logo></Logo>
            <ul className="flex items-center space-x-4">
              <li>
                <DropDownMenu imageUrl={user.picture || ""}></DropDownMenu>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Logo></Logo>
          <ul className="flex items-center space-x-4">
            <li>
              <SignUpButton></SignUpButton>
            </li>
            <li>
              <LoginButton></LoginButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
