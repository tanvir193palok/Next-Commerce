import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import SocialLogin from "../../../components/auth/SocialLogin";

const LoginPage = () => {
  return (
    <div class="contain py-16">
      <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
        <p class="text-gray-600 mb-6 text-sm">Welcome Back</p>

        {/* Login Form */}

        <LoginForm />

        <div class="mt-6 flex justify-center relative">
          <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>

        {/* Login with social accounts*/}
        <SocialLogin />

        <p class="mt-4 text-center text-gray-600">
          Don't have account?{" "}
          <Link href="/register" class="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
