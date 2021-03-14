import React from "react";

const text = [
  {
    date: "11/2/2021",
    content: "Bot is being retired, since it quickly hits the Discord API rate limit when trying to send users all relevant guild listings."
  },
  {
    date: "24/1/2021",
    content: "Added support for all datacenters in the game and added more filtering options."
  },
  {
    date: "20/1/2021",
    content: "Initial deployment. Users can create and search through guild listings. Currently only supports Aether datacenter"
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
