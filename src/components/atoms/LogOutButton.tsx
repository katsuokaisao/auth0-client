import { useAuth0 } from "@auth0/auth0-react";

export default function LogOutButton() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
          },
        })
      }
    >
      ログアウト
    </button>
  );
}
