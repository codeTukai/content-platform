import { useRef } from "react";
import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";
import axios from "axios";
import { DATABASE_URL } from "./config";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(
        DATABASE_URL + "/api/v1/user/signin",
        {
          username,
          password,
        }
      );

      const jwt = response.data.token;

      localStorage.setItem("token", jwt);

      navigate("/dashboard");
    } catch (error) {
      console.error("Sign in failed:", error);
      alert("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4">

   
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-200">

      
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to access your content
          </p>

        </div>

     
        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Username
            </label>

            <InputBox
              ref={usernameRef}
              placeholder="Enter your username"
            />
          </div>

        
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <InputBox
              ref={passwordRef}
              placeholder="Enter your password"
            />
          </div>

          {/* Sign In */}
          <div className="pt-2">
            <Button
              onClick={signin}
              variant="orbitary"
              size="md"
              text="Sign In"
              fullWidth={true}
            />
          </div>

        </div>

       
        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>

        </div>

      </div>
    </div>
  );
}