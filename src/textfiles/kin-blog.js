import React from "react";

const text = [
    {
        date: "10/1/2021",
        content:"Test"
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
      <div>
        <p className="font-bold">{item.date}</p>
        <p>{item.content}</p>
      </div>
    );
  });
  return [blog];
}

export default blogFormatter;
