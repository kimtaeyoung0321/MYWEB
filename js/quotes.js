const quotes = [
  {
    quote: "To make headway, improve your head.",
    autour: "B. C. Forbes",
  },
  {
    quote: "세상이 너를 버렸다고 생각하지마라, 세상은 너를 가진 적이 없다.",
    autour: "작자 미상",
  },
  {
    quote: "불사가의한 승리는 있지만 불가사의한 패배는 없다.",
    autour: "노무라 가쓰야",
  },
  {
    quote:
      "One must live the way one thinks or end up thinking the way one has lived.",
    autour: "폴 부르제(프랑스작가)",
  },
  {
    quote: "Tough times never last, but tough people do",
    autour: "Robert H. Schuller",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed.",
    autour: "Michael Jordan",
  },
  {
    quote:
      "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. – Angelina Jolie",
    autour: "Angelina Jolie",
  },
  {
    quote: "Grind Hard, Shine Hard.",
    autour: "Dwayne Johnson",
  },
  {
    quote: "모두가 미쳤다고 한다면 도전 할만한 가치가 있는법",
    autour: "유튜브 댓글중",
  },
  {
    quote:
      "변명 중에서도 가장 어리석고 못난 변명은 시간이 없어서 라는 변명이다",
    autour: "에디슨",
  },
];

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.autour;
