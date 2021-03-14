import React from "react";

const text = [
  {
    date: "11/1/2021",
    content:"Fixed a bug with authentication on Safari. Added support for filtering transactions by date, category, and payment account."
},
{
  date: "13/12/2020",
  content: "Added ability to add custom categories and payment accounts."
},
  {
    date: "9/11/2020",
    content:
      "Initial deployment.",
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
