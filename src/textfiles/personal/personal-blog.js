import React from "react";

const text = [
  {
    date: "14/3/2021",
    content: "Completely rewrote all project pages and added updated resume."
  },
  {
    date: "10/1/2021",
    content:
    "Initial deployment."
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
