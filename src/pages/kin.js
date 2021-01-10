import React from "react";
import githubLogo from "../icons/github.png";
import kinFeatures from "../textfiles/kin-features";
import kinGoals from "../textfiles/kin-description.js";
import kinTech from "../textfiles/kin-tech";
import kinReflect from "../textfiles/kin-reflection";
import kinBlog from '../textfiles/kin-blog';

const KinPage = () => {
  return (
    <div className="ml-8 mt-3 mr-8 mb-8">
      <a className="font-bold hover:text-red-500" href="/">
        Home
      </a>
      <h1 className="mt-5 text-5xl font-bold text-gray-900">Kin</h1>
      <div className="flex items-center">
        <img
          style={{ backgroundImage: `url(${githubLogo})` }}
          className="bg-contain h-4 w-4 shadow-2xl rounded-full mr-1"
          alt="github logo"
        ></img>
        <a
          href="https://github.com/dokdek/kin"
          target="_blank"
          className="text-xs hover:text-red-500"
          rel="noreferrer"
        >
          : Source
        </a>
      </div>
      <div className="flex items-center">
      <svg className="bg-cover h-4 w-4 shadow-2xl rounded-full mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
</svg>
      <p className="text-xs">: In development</p>
      </div>
      <h1 className="mt-7 text-3xl font-bold">Goals</h1>
      <p>{kinGoals}</p>
      <h1 className="mt-7 text-3xl font-bold">Technologies Used </h1>
      <ul className="ml-2">
        {kinTech()}
      </ul>
      <h1 className="mt-7 text-3xl font-bold">Features</h1>
      <p>{kinFeatures}</p>
      <h1 className="mt-7 text-3xl font-bold">Reflection</h1>
      <p>{kinReflect}</p>
      <h1 className="mt-7 text-3xl font-bold">Updates/Blog</h1>
      <p className="divide-y-2 divide-yellow-500 divide-solid">{kinBlog()}</p>
    </div>
  );
};

export default KinPage;
