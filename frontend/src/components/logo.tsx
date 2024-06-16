import logo from "@/assets/logo.png";

function Logo({ type }: { type?: string }) {
  return (
    <div className={`flex ${type === "mobile" ? "justify-center " : ""} `}>
      <img src={logo} alt="YelpCampPH" className="w-[60px] h-[60px]" />
      <span
        className={`text-center  ${
          type === "mobile" ? "my-auto text-lg" : "m-auto text-sm lg:text-xl"
        }   font-semibold`}
      >
        YelpCampPH
      </span>
    </div>
  );
}

export default Logo;
