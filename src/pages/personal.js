import React from "react";
import { Helmet } from'react-helmet';
import favicon from '../icons/favicon.ico'
import githubLogo from "../icons/github.png";
import trelloLogo from "../icons/trello-mark-blue.png"
import personalDescription from "../textfiles/personal/personal-description";
import personalTech from "../textfiles/personal/personal-tech";
import personalFeatures from "../textfiles/personal/personal-features";
import personalReflection from "../textfiles/personal/personal-reflection";
import personalBlog from "../textfiles/personal/personal-blog";

const PersonalPage = () => {
  return (
    
    <div className="ml-8 mt-3 mr-8 mb-8">
            <Helmet>
        <title>Personal Site - Patchanon Suepai</title>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <a className="font-bold hover:text-red-500" href="/">
        Home
      </a>
      <h1 className="text-5xl font-bold text-gray-900">Personal Site</h1>
      <div className="flex items-center">
      <svg className="bg-contain h-4 w-4 shadow-2xl mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
      <p className="text-xs italic">: Complete</p>
      </div>
      <div className="flex items-center mt-1">

        <a
          href="https://github.com/dokdek/psuepai"
          target="_blank"
          rel="noreferrer"
        >
                 <img
          src={githubLogo}
          className="bg-contain h-5 w-5 shadow-2xl rounded-full mr-1"
          alt="github logo"
        ></img>
        </a>
                <a
          href="https://trello.com/b/Ex7iEibX/kin"
          target="_blank"
          rel="noreferrer"
        >
                <img src={trelloLogo}
        className="bg-contain h-5 w-5 shadow-2xl mr-1"
        alt="trello logo"></img>
        </a>
        <a href="https://psuepai.com/"
          target="_blank"
          rel="noreferrer">
<svg  className="bg-contain h-5 w-5 shadow-2xl mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
</a>
      </div>
      <h1 className="mt-7 text-3xl font-bold">Goals</h1>
      <p className="mt-3">{personalDescription}</p>
      <h1 className="mt-7 text-3xl font-bold">Technologies Used </h1>
      <ul className="ml-2 mt-3">
        {personalTech()}
      </ul>
      <h1 className="mt-7 text-3xl font-bold">Features</h1>
      <p className="mt-3">{personalFeatures}</p>
      <h1 className="mt-7 text-3xl font-bold">Reflection</h1>
      <p className="mt-3">{personalReflection}</p>
      <h1 className="mt-7 text-3xl font-bold">Updates/Blog</h1>
      <div className="divide-y-2 divide-yellow-500 divide-solid">{personalBlog()}</div>
    </div>
  );
};

export default PersonalPage;
