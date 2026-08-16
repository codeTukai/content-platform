import { useRef, useState } from "react";
import { Button } from "../component/ui/Button";
import { InputBox } from "../component/ui/InputBox";
import axios from "axios";
import { DATABASE_URL } from "./config";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function signup() {
    const username = usernameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${DATABASE_URL}/api/v1/user/signup`,
        {
          username,
          password,
        }
      );

      alert("You have signed up successfully");

      navigate("/login");

    } catch (error) {
      console.error("Signup failed:", error);

      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message ||
          "Signup failed. Please try again."
        );
      } else {
        alert("Something went wrong");
      }

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4">

   =
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">

    
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your account and start saving content
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

      
          <div className="pt-2">
            <Button
              onClick={signup}
              variant="orbitary"
              size="md"
              text={loading ? "Creating Account..." : "Create Account"}
              fullWidth={true}
            />
          </div>

        </div>

        
        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">
            Already have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              Sign In
            </button>
          </p>

        </div>

      </div>
    </div>
  );
}