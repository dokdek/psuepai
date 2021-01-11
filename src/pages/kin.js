import React from "react";
import { Helmet } from'react-helmet';
import favicon from '../icons/favicon.ico'
import githubLogo from "../icons/github.png";
import trelloLogo from "../icons/trello-mark-blue.png"
import kinFeatures from "../textfiles/kin/kin-features";
import kinGoals from "../textfiles/kin/kin-description.js";
import kinTech from "../textfiles/kin/kin-tech";
import kinReflect from "../textfiles/kin/kin-reflection";
import kinBlog from '../textfiles/kin/kin-blog';

const KinPage = () => {
  return (
    
    <div className="ml-8 mt-3 mr-8 mb-8">
            <Helmet>
        <title>Kin - Patchanon Suepai</title>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <a className="font-bold hover:text-red-500" href="/">
        Home
      </a>
      <h1 className="text-5xl font-bold text-gray-900">Kin</h1>
      <div className="flex items-center">
      <svg className="bg-cover h-4 w-4 shadow-2xl rounded-full mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
</svg>
      <p className="text-xs italic">: Under development</p>
      </div>
      <div className="flex items-center mt-1">

        <a
          href="https://github.com/dokdek/kin"
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
        <a href="https://kin-site.herokuapp.com/login"
          target="_blank"
          rel="noreferrer">
<svg  className="bg-contain h-5 w-5 shadow-2xl mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
</a>
      </div>
      <h1 className="mt-7 text-3xl font-bold">Goals</h1>
      <p className="mt-3">{kinGoals}</p>
      <h1 className="mt-7 text-3xl font-bold">Technologies Used </h1>
      <ul className="ml-2 mt-3">
        {kinTech()}
      </ul>
      <h1 className="mt-7 text-3xl font-bold">Features</h1>
      <p className="mt-3">{kinFeatures}</p>
      <h1 className="mt-7 text-3xl font-bold">Reflection</h1>
      <p className="mt-3">{kinReflect}</p>
      <h1 className="mt-7 text-3xl font-bold">Updates/Blog</h1>
      <div className="divide-y-2 divide-yellow-500 divide-solid">{kinBlog()}</div>
    </div>
  );
};

export default KinPage;
