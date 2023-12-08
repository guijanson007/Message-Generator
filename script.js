const baseMessage = "You have to:";

const messageObject = {
  actions: ["study", "practice", "think about", "talk about"],
  topics: [
    "coding",
    "entrepreneurship",
    "business",
    "uni stuff",
    "personal projects",
    "running",
  ],
  timePeriod: [
    "for 10 minutes",
    "for 15 minutes",
    "for 5 minutes",
    "for 30 minutes",
    "for the rest of the day",
    "for 2 minutes",
    "for 1 minute",
  ],
};

function createMessage(message, object) {
  let answer = message;

  let random1 = Math.floor(Math.random() * object.actions.length);
  let random2 = Math.floor(Math.random() * object.topics.length);
  let random3 = Math.floor(Math.random() * object.timePeriod.length);

  let actionRandom = object.actions[random1];
  let topicsRandom = object.topics[random2];
  let timePeriodRandom = object.timePeriod[random3];

  answer = answer.concat(" ", actionRandom);
  answer = answer.concat(" ", topicsRandom);
  answer = answer.concat(" ", timePeriodRandom);

  return answer;
}

console.log(createMessage(baseMessage, messageObject));
