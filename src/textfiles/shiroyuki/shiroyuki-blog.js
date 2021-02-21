import React from "react";

const text = [
  {
    date: "01/24/2021",
    content: "After finishing the main features of the bot, I ran into a problem that pretty much renders the bot a bit useless. With the way I wanted the bot to DM the user the list of guilds that matches their search criteria, the bot would very quickly hit the Discord API rate limit which is in place to prevent spam. So the bot would not work in a true public setting as it would very easily hit the limits with real users. Thus, this project is being retired as is."
  },
  {
    date: "01/20/2021",
    content: "Since the API requires a lot of async calls and promises, I ran into a classic problem of having too many chained promises and the code ends up being a triangle of callbacks which is extremely difficult to read. In future projects with multiple nested promises, I would try and extract them each into their own functions and call them sequentially, making the code a lot more readable."
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
