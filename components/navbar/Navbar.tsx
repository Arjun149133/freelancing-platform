import Link from "next/link";
import Links from "./Links";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./Search";

const Navbar = () => {
  return (
    <div className=" flex p-3 mb-4 shadow">
      <div className=" mx-2 mr-7 py-2 ">
        <Link href={"/dashboard"}>
          <h1 className=" text-2xl font-bold">onHire</h1>
        </Link>
      </div>
      <SearchBar />
      <Links />
      <ProfileIcon />
    </div>
  );
};

export default Navbar;
