import EditButton from "./EditButton";

const Bio = () => {
  const content = `🚀 Experienced MERN Stack Developer | Redux, Next.js, Express, MySQL, GraphQL, TypeScript, Firebase.

  Hello! I'm Arjun, a dedicated MERN Stack Developer with a year of hands-on experience. Specializing in Redux, Next.js, Express, MySQL, GraphQL, TypeScript, and Firebase, I've successfully delivered efficient and scalable web solutions for clients globally.
  
  What I Offer:
  
  ✨ Expertise in MERN Stack Development
  🔄 Seamless state management with Redux
  🚀 Building dynamic React applications with Next.js and TypeScript.
  🌐 Robust backend development using Express
  🛢️ Efficient MySQL database design
  
  Why Choose Me:
  
  🎯 Passionate about clean and innovative coding
  💡 Problem-solver with a keen eye for detail
  🤝 Strong communication for project success
  Let's collaborate to bring your project to life! Feel free to reach out, and let's discuss how I can contribute to your success.`;

  return (
    <div className="px-8 py-4 flex flex-col border-b border-slate-300">
      <div className="flex justify-between my-2 p-2">
        <div className="relative w-[274px]">
          <h1 className="text-2xl font-bold">Full Stack Developer</h1>
          <EditButton className="top-0 right-0" />
        </div>
        <div className="relative w-[100px] flex items-center">
          <span className="text-xl font-semibold">$10/hr</span>
          <EditButton className="top-0 right-0" />
        </div>
      </div>
      <p className="text-wrap p-2 leading-6 whitespace-pre-line text-slate-800">
        {content}
      </p>
    </div>
  );
};

export default Bio;
