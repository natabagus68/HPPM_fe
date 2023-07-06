import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";
import Button from "@common/components/button/Button";
import { ArrowLeft, Edit2, LockIcon } from "lucide-react";
import defaultAvatar from "@assets/default-avatar.jpg";
import useAccount from "./_account-model";

export default function Details() {
  const hook = useAccount();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs
        data={[
          { name: "User", link: "/admin/user/account" },
          { name: "Account", link: "/admin/user/account" },
          {
            name: "Account Details",
            link: "/admin/user/account/details",
            active: true,
          },
        ]}
      />
      <div className="w-full py-6 px-8 flex flex-col gap-6 rounded-md border border-[#D0D3D9]">
        {/* head */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#313030] font-bold text-[24px] h-[41px]">
              User Details
            </h1>
            <p className="text-[16px] text-[#667085]">Account Information</p>
          </div>
          <div className="flex gap-4">
            <Button
              bg="#667085"
              color="#667085"
              lable="Back"
              border={true}
              icon={<ArrowLeft size={20} strokeWidth={2.5} />}
              classname="px-4"
              fn={() => hook.navigate("../")}
            />
            <Button
              bg="#F79009"
              color="white"
              lable="Edit User"
              icon={<Edit2 color="white" size={16} />}
              classname="px-4"
              fn={() => hook.navigate("../edit/form")}
            />
          </div>
        </div>
        <hr className="bg-[#D0D3D9]" />
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-base text-[#313030] font-semibold">
                Profile Picture
              </span>
              <div className="flex items-center gap-4">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                  <img
                    src={defaultAvatar}
                    alt="profile"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button className="text-blue-500 font-semibold">
                  View Photo
                </button>
              </div>
            </div>
            <hr className="bg-[#D0D3D9]" />
            <div className="flex justify-between">
              <div className="flex flex-col gap-6">
                <span className="text-base text-[#313030] font-semibold">
                  General Information
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#989FAD] text-[14px]">
                    Status
                  </span>
                  <span className="font-semibold text-[#12B569] text-base">
                    Active
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#989FAD] text-[14px]">
                    Name
                  </span>
                  <span className="font-semibold text-[#514E4E] text-base">
                    Afif Chandra
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#989FAD] text-[14px]">
                    Email
                  </span>
                  <span className="font-semibold text-[#514E4E] text-base">
                    contoh@mail.com
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end min-w-[179px] gap-6">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#989FAD] text-[14px]">
                    Role
                  </span>
                  <span className="font-semibold text-[#514E4E] text-base">
                    Member
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-[#989FAD] text-[14px]">
                    Password
                  </span>
                  <Button
                    bg="#1BBDD4"
                    color="white"
                    lable="Update Password"
                    icon={<LockIcon color="white" size={16} />}
                    classname="px-4"
                  />
                  <span className="text-[#E18308] text-[12px]">
                    Last update two months ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
