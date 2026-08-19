import { useNavigate } from "react-router-dom";
import { Button } from "../component/ui/Button";

export function Home() {
  const navigate = useNavigate();
  function signUp() {
    navigate("/signup");
  }
  function signIn() {
    navigate("/login");
  }
  return (
    <>
      <div className="min-h-screen w-full bg-[url('/image.png')] bg-cover bg-center bg-no-repeat">
        <nav className="flex items-center justify-between bg-blue-200/90 px-8 py-5 shadow-md">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              ContentManager
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={signUp}
              text="Sign Up"
              variant="primary"
              size="lg"
            />

            <Button onClick={signIn} text="Login" variant="primary" size="lg" />
          </div>
        </nav>

        <div className="flex min-h-[calc(100vh-88px)] items-center justify-center px-4">
          <div className="w-full max-w-2xl rounded-3xl border border-white/40 bg-white/80 p-10 text-center shadow-2xl backdrop-blur-md">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Organize Your Content.
              <span className="text-[#20B2AA]"> Inspire the World.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              Store, manage, and share your favorite content in one simple and
              beautiful workspace.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Button
                onClick={signUp}
                text="Get Started"
                variant="primary"
                size="lg"
              />

              <Button
                onClick={signIn}
                text="Login"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
