import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "gatsby";
import githubLogo from "../icons/github.png";
import resume from "../files/Patchanon_Suepai_Resume.pdf";

// markup
const IndexPage = () => {
  const [greeting, setGreeting] = useState();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  function getGreeting(time) {
    const hour = time.getHours();
    if (11 >= hour && hour >= 2) {
      setGreeting("Good morning");
    } else if (17 >= hour && hour >= 11) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }

  function emailClick() {
    const email = document.createElement("textarea");
    email.value = "psuepai@my.yorku.ca";
    document.body.appendChild(email);
    email.select();
    document.execCommand("copy");
    document.body.removeChild(email);
    setSnackbarOpen(true);
  }

  useEffect(() => {
    getGreeting(new Date());
  });

  return (
    <div className="m-8">
      <h1 className="text-5xl font-bold leading-7 text-gray-900">
        {greeting + "!"}
      </h1>
      <h2 className="mt-5 text-xl">I'm Patchanon Suepai</h2>
      <p className="mt-2">
        Current York University software engineering student with an interest in
        web and mobile app development
      </p>
      <h1 className="mt-7 text-3xl font-bold">Projects:</h1>
      <ul className="mt-5">
        <li>
          <Link
            to="/kin"
            className="font-bold text-xl underline hover:text-red-500"
          >
            Kin
          </Link>
          <p>
            An envelope budgeting website made for personal use. Developed using
            React and conneceted to MongoDB via a REST API using Express.
          </p>
        </li>
        <li className="mt-3">
          <Link
            to="/personal"
            className="font-bold text-xl underline hover:text-red-500"
          >
            Personal Site
          </Link>
          <p>This current site, a static site created in React/Gatsby</p>
        </li>
      </ul>
      <h1 className="mt-7 text-3xl font-bold mb-5">Info:</h1>
      <div className="flex items-center mb-1">
        <img
          style={{ backgroundImage: `url(${githubLogo})` }}
          className="bg-contain h-10 w-10 shadow-2xl rounded-full mr-1"
          alt="github logo"
        ></img>
        <a
          href="https://github.com/dokdek"
          target="_blank"
          className="hover:text-red-500"
          rel="noreferrer"
        >
          : dokdek
        </a>
      </div>
      <div className="flex items-center">
        <svg
          className="bg-cover h-10 w-10 shadow-2xl rounded-full mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <button
          className="hover:text-red-500 cursor-pointer"
          onClick={() => emailClick()}
        >
          : psuepai@my.yorku.ca
        </button>
      </div>
      <div className="flex items-center">
      <svg className="bg-cover h-10 w-10 shadow-2xl rounded-full mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
        <a href={resume} target="_blank" className="hover:text-red-500" rel="noreferrer"

>: Resume</a>
      </div>
      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={6000}
      >
        <Alert severity="success">Email copied to clipboard</Alert>
      </Snackbar>
    </div>
  );
};

export default IndexPage;
