import logo from "@/assets/logo.png";

function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex">
        <img src={logo} alt="YelpCampPH" className="w-[60px] h-[60px]" />
        {/* <span className="text-center m-auto text-sm">Yelp Camp PH</span> */}
        <ul className="flex gap-4 my-auto">
          <li>Home</li>
          <li>Gallery</li>
          <li>Blog</li>
        </ul>
      </div>

      <ul className="flex gap-2 my-auto">
        <li>Sign in</li>
        <li>Sign up</li>
      </ul>
    </header>
  );
}

export default Header;
