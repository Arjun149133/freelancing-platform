import React from 'react'
import { Handshake, UserRoundCheck } from 'lucide-react';
import { Grid, UserCheck, DollarSign, Lock } from "lucide-react";
import DescriptionCard from './Secondary/DescriptionCard';
import HeroCard1 from './Secondary/HeroCard1';
import HeroCard2 from './Secondary/HeroCard2';
const daata = [
  {
    title: "Top Experts in Every Field",
    description:
      "Work with top-rated professionals across various industries who are verified for their expertise and skills.",
    icon: <UserRoundCheck />,
    animation: "expert.mp4",
    hidden: "hiddenL",
  },
  {
    title: "Quality Work, Affordable Prices",
    description:
      "Get high-quality results without exceeding your budget. Access top freelancers at competitive rates and exceptional service.",
    icon: "",
    animation: "price.mp4",
    hidden: "hiddenR",
  },
  {
    title: "Collaborate with Ease",
    description:
      "Assemble your perfect team from multiple categories and manage projects seamlessly in real-time.",
    icon: "",
    animation: "collab.mp4",
    hidden: "hiddenL",
  },
  {
    title: "Secure & Protected Payments",
    description:
      "Your funds are protected through our escrow system until you approve the work.",
    icon: "",
    animation: "protection.mp4",
    hidden: "hiddenR",
  },
  {
    title: "Smart Matching for Effortless Hiring",
    description:
      "Let our AI find the perfect freelancers for your project. No need to browse endlessly for the best freelancers—we do the work for you.",
    icon: "",
    animation: "ai.mp4",
    hidden: "hiddenL",
  },
];
const data = [
  {
    title: "Wide Range of Categories",
    description:
      "Explore diverse categories to find the right talent for your project. We offer options in design, writing, and programming to suit all needs.",
    icon: <Grid />,
  },
  {
    title: "Expert Freelancers",
    description:
      "Work with top-rated freelancers verified for their skills and experience. Our selection includes professionals from various industries.",
    icon: <UserCheck />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Get high-quality services without breaking the bank. Choose from budget-friendly options that meet your financial expectations and goals.",
    icon: <Handshake />,
  },
  {
    title: "ProtectedPay",
    description:
      "Your funds are safe with our escrow system until you approve the work. This feature ensures that you only pay when you're satisfied.",
    icon: <Lock />,
  },
];



const CallforAction = () => {
  
  return (
    <div className=" p-12">
      <div>
        <h1 className="text-black font-semibold text-5xl">
          Unlock Your Project's Potential
        </h1>
        <div className="mt-6 mx-auto w-full lg:h-64 grid  grid-col-1 custom9-md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((ele, index) => (
            <div key={index}>
              <DescriptionCard data={ele} />
            </div>
          ))}
        </div>
        <HeroCard1 />
        <HeroCard2 />
      </div>
    </div>
  );
}

export default CallforAction