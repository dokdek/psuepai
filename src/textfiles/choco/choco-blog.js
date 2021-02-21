import React from "react";

const text = [
  {
    date: "21/2/2021",
    content: "Bot now has vocabularly functionality. With this, the main goals and features of the bot are complete, now just to continue to use the bot for testing and seeing if there are any quality of life aspects I can improve on. For the future, I want to add a website as an additional platform. So users are also able to conduct reviews and learnings on a site as well as the bot, and they would be linked."
  },
  {
    date: "20/2/2021",
    content: "Successfully managed to compile together a vocabularly JSON list using a script that pulls from a known list of Wanikani vocab and puts each individual vocab into a Japanese-English dictionary website API (Jisho) to extract the meanings. Next step is to implement this vocab list into the bot."
  },
  {
    date: "14/2/2021",
    content: "Bot currently functional for learning and reviewing Kanji. It successfully implements the algorithm and it is currently set to check for new reviews every hour. Next steps are to add vocabularly functionality. There currently isn't a public list of Wanikani's vocabularly list along with their meanings, so I'll have to write a script to compile that into a JSON for use."
  },
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
