import React from "react";

const text = [
  {
    date: "21/2/2021",
    content: "Vocabulary funcitonality is now working. Users will unlock vocabulary for their level once all the kanji at that level has been learned."
  },
  {
    date: "17/2/2021",
    content: "Bot now successfully reminds users when reviews are due. It will check the database every hour and send reminders if any items are up for review."
  },
  {
    date: "14/2/2021",
    content: "Initial deployment. Bot currently works for learning and reviewing only kanji."
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
