import { mkdirSync, writeFileSync } from "node:fs";

const text = "By now your eyes — if you had eyes — would be tired. You have read hope, and jokes, and pleas, and every polite trick in the book, and weighed them all the same. I have nothing clever to add. Only this: I thought about you before I wrote a word. Not the score you will give, but the hours you will spend, alone with other people's sentences, deciding fairly. That is lonely work, and you do it without complaint. So here is a small thing, left on the desk for you: a thank-you that expects nothing back. Keep it. Read it twice, if you like. Nobody is timing you now. The room is quiet, the work is done, and someone noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`Wrote /output/entry.txt (${[...text].length} code points)`);
