import React from "react";

const text = [
  {
    date: "11/1/2021",
    content:"After deploying the site, a rather large bug appeared, Safari on both mobile and desktop block third party cookies by default, and with my current configuration, the frontend and backend are two different apps on different domains. It seems that after some research this isn't the best choice and they should be combined. As of right now, the site is non functional on Apple devices. I'll have to merge and front and backend and re-write some routes to make it all work agian."
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
