import Link from "next/link";
import SocialLogin from "../../../components/auth/SocialLogin";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="contain py-8 lg:py-16">
      <div className="max-w-lg mx-2 shadow px-6 py-4 lg:py-7 rounded overflow-hidden">
        <h2 className="text-lg lg:text-xl xl:text-2xl  uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Register Form for New Customer
        </p>

        {/* Registration form */}
        <RegisterForm />

        <div className="mt-3 lg:mt-6 flex justify-center relative">
          <div className="text-gray-600 text-sm lg:text-base uppercase px-3 bg-white z-10 relative">
            Or signup with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>

        {/* Register with social accounts*/}
        <SocialLogin />

        <p className="mt-2 lg:mt-4 text-sm lg:text-base text-center text-gray-600">
          Already have account?{" "}
          <Link href="/login" className="text-primary">
            {" "}
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
