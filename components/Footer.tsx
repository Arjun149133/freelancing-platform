import Link from "next/link";

const Footer = () => {
  return (
    <div className=" p-5 absolute bottom-0 w-full">
      <footer className="bg-gray-800 text-white text-center text-sm p-3 h-52 rounded-lg">
        <div>
          <div className="container mx-auto grid grid-cols-4 py-3 my-5">
            <div>
              <Link href="/about" className=" hover:underline">
                About Us
              </Link>
            </div>
            <div>
              <Link href="/termsandservices" className=" hover:underline">
                Terms and Services
              </Link>
            </div>
            <div>
              <Link href="/contact" className=" hover:underline">
                Contact Us
              </Link>
            </div>
            <div>
              <Link href="/something" className=" hover:underline">
                Something
              </Link>
            </div>
          </div>
          <div className=" flex justify-center">
            <span className=" flex border border-slate-300 w-[1220px]"></span>
          </div>
        </div>
        <div className=" my-4 text-xs font-bold">
          <span>2024 onHire</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
