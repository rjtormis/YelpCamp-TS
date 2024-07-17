import { ShieldCheck } from "lucide-react";

function Profile() {
  return (
    <div className=" w-full ">
      <div className="px-4 mx-2 relative ">
        <div className="flex ">
          <p className="my-auto flex font-bold">
            <ShieldCheck size="16" className="my-auto mr-2" />
            Account
          </p>
        </div>
        <div className="mt-4 overflow-auto"></div>
      </div>
    </div>
  );
}

export default Profile;
