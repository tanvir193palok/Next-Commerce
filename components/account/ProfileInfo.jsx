import Link from "next/link";

const ProfileInfo = ({ user }) => {
  return (
    <div className="shadow rounded bg-white px-4 pt-2 lg:pt-6 pb-4 lg:pb-8">
      <div class="flex items-center justify-between mb-2 lg:mb-4">
        <h3 class="font-medium text-gray-800 text-base lg:text-lg">Personal Profile</h3>
      </div>
      <div class="space-y-1 text-sm md:text-base">
        <h4 class="text-gray-700 font-medium">{user?.name}</h4>
        <p class="text-gray-800">{user?.email}</p>
        <p class="text-gray-800">0811 8877 988</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
