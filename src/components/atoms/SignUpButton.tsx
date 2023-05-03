import { useAuth0 } from "@auth0/auth0-react";

export default function SignUpButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            screen_hint: "signup",
          },
        })
      }
      className="text-white bg-blue-500 hover:opacity-80 font-semibold py-2 px-4 border border-blue-500 rounded"
    >
      会員登録
    </button>
  );
}
