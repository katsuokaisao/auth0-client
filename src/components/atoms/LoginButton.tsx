import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
    >
      ログイン
    </button>
  );
}
