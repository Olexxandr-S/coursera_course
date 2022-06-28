var names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

for (let i = 0; i < names.length; i++) {
  let firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === "j") {
    // byeSpeaker.xxxx
    console.log("Good Bye " + names[i]);
  } else {
    // helloSpeaker.xxxx
    console.log("Hello " + names[i]);
  }
}
