import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import SocialLogin from "../../../components/auth/SocialLogin";

const LoginPage = () => {
  return (
    <div className="contain py-8 lg:py-16">
      <div className="max-w-lg shadow px-6 py-4 lg:py-7 mx-2 rounded overflow-hidden">
        <h2 className="text-lg lg:text-xl xl:text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">Welcome Back</p>

        {/* Login Form */}

        <LoginForm />

        <div className="mt-3 lg:mt-6 flex justify-center relative">
          <div className="text-gray-600 text-sm lg:text-base uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>

        {/* Login with social accounts*/}
        <SocialLogin />

        <p className="mt-2 lg:mt-4 text-center text-sm lg:text-base text-gray-600">
          Don&apos;t have account?{" "}
          <Link href="/register" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
