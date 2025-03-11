import React from "react";

interface UserType {
  name: string;
  role: string;
  location: string;
  images: { background: string; profile: string };
}
const UserInfo: React.FC<{ User: UserType }> = ({ User }) => {
  const {
    name,
    role,
    location,
    images: { background, profile },
  } = User;

  return (
    <div className="bg-white rounded-lg pb-4">
      <div className="w-full rounded-lg relative">
        <img
          className="w-full rounded-tl-lg rounded-tr-lg"
          src={background}
          alt="Background"
        />
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-2 border-white overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover rounded-full"
            src={profile}
            alt="User"
          />
        </div>
      </div>
      <div className="w-2/3 m-auto mt-12 text-center px-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default UserInfo;
