import Link from "next/link";

const Links = () => {
  return (
    <div className=" ml-10 flex flex-grow items-center justify-end space-x-12 my-2">
      <div>
        <Link className=" hover:underline" href={"/messages"}>
          Messages
        </Link>
      </div>
      <div>
        <Link className=" hover:underline" href={"/contact"}>
          Contact Us
        </Link>
      </div>
      <div>
        <Link className=" hover:underline" href={"/profile"}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Links;
