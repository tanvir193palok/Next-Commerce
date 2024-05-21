import Link from "next/link";

const ProfileInfo = () => {
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-medium text-gray-800 text-lg">Personal Profile</h3>
        <Link href="#" class="text-primary">
          Edit
        </Link>
      </div>
      <div class="space-y-1">
        <h4 class="text-gray-700 font-medium">John Doe</h4>
        <p class="text-gray-800">example@mail.com</p>
        <p class="text-gray-800">0811 8877 988</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
