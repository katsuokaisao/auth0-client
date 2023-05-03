import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../atoms/Spinner";

export default function MainContents() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <main className="bg-white py-4">
        <div className="h-screen w-screen flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      </main>
    );
  } else if (isAuthenticated && user) {
    return (
      <main className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-black font-semibold text-lg">
              <div>
                <h1>ようこそ、{user.nickname}さん</h1>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-black font-semibold text-lg">
              <div>ようこそ、ゲストさん</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
