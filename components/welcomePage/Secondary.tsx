import React from 'react'
import ProfileCard from './Secondary/ProfileCard';
import { Key } from 'lucide-react';

const data = [
  {
    name: "Emily Johnson",
    bio: "Expert Shopify developer with a passion for e-commerce.",
    pricePerHr: 50,
    profile: "/photos/rand-img-1.jpg",
    currentStatus: "Available now",
    skills: ["Shopify", "E-commerce", "HTML", "CSS", "JavaScript"],
    rating : 4.9
  },
  {
    name: "Michael Smith",
    bio: "Creative graphic designer specializing in brand identity.",
    pricePerHr: 40,
    profile: "/photos/rand-img-2.jpg",
    currentStatus: "Available now",
    skills: [
      "Graphic Design",
      "Adobe Photoshop",
      "Illustrator",
      "Branding",
      "UI Design",
    ],
    rating : 4.6
  },
  {
    name: "James Brown",
    bio: "Full-stack developer with experience in building scalable web applications.",
    pricePerHr: 60,
    profile: "/photos/rand-img-3.jpg",
    currentStatus: "Available now",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    rating : 4.8
  },
  {
    name: "Sophie Williams",
    bio: "Professional project manager skilled in agile methodologies.",
    pricePerHr: 45,
    profile: "/photos/rand-img-4.jpg",
    currentStatus: "Available now",
    skills: [
      "Project Management",
      "Agile",
      "Scrum",
      "Team Leadership",
      "Communication",
    ],
    rating : 4.7
  },
];


const Secondary = () => {
  return (
    <div className=" lg:h-[120vh] w-full bg-[#f0f0f0] p-12">
      <div className="">
        <p className="text-gray-900">Looking to Hire ?</p>
        <h1 className="text-5xl text-black font-bold">Explore Top Talent</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  mt-8">
          {data.map((ele, idx) => (
            <div key={idx}>
              <ProfileCard data={ele} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Secondary