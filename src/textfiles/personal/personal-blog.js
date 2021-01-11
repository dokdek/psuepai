import React from "react";

const text = [
  {
    date: "10/1/2021",
    content:
    "Site is functionally complete and fully hosted, might tinker around with the layout/components, but I want to keep the site simple and avoid too much eye candy."
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
