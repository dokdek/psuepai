import React from "react";

const text = [
    {
        date: "10/1/2021",
        content:"The project is now deployed on a server, I decided to use Heroku as a hosting service as it's free and it would be only me using this for now. Transferring everything over to Heroku wasn't too difficult, I had some missing dependencies not inside package.json so I had to update that. I also had to update the frontend to query the proper API routes as they were previously pointing to localhost routes."
    },
  {
    date: "9/1/2021",
    content:
      "Currently, the website only works on localhost on my personal machine, I want to host this on a real domain so I'm able to access it on other devices and so other's can try it out as well.",
  }
];

function blogFormatter() {
  const blog = text.map((item) => {
    return (
      <div key={item.content}>
        <p className="font-bold mb-2 mt-3 ">{item.date}</p>
        <p className="mb-3">{item.content}</p>
      </div>
    );
  });
  return [blog];
}

export default blogFormatter;
