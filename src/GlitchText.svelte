<script lang="ts">
  import { onDestroy } from "svelte";
  import { randomElement, randomInt } from "./libs/util";

  const things = [
    "coding",
    "knitting",
    "drawing",
    "drawing",
    "drawing",
    "drawing",
    "drawing",
    "designing",
    "planning",
    "writing",
    "writing",
    "writing",
    "writing",
    "writing",
    "writing",
    "writing",
    "programming",
    "programming",
    "programming",
    "programming",
    "programming",
    "concluding",
    "programming",
    "thinking",
    "painting",
    "painting",
    "painting",
    "painting",
    "painting",
    "sewing",
    "sketching",
    "ruminating",
    "deliberating",
    "pondering",
    "contemplating",
    "abstracting",
    "abstracting",
    "abstracting",
    "abstracting",
    "abstracting",
    "abstracting",
    "optimising",
    "optimising",
    "optimising",
    "optimising",
    "optimising",
    "optimising",
    "refactoring",
    "refactoring",
    "refactoring",
    "objectifying",
    "simplifying",
    "decoupling",
    "debugging",
    "debugging",
    "debugging",
    "debugging",
    "debugging",
    "debugging",
    "configuring",
    "streamlining",
    "searching",
    "tweaking",
    "editing",
  ];
  const junk = [
    "#",
    "@",
    "%",
    "*",
    "&",
    "<",
    ">",
    "_",
    "=",
    "+",
    "[",
    "]",
    "|",
    "-",
    "!",
    "?",
    "X",
  ];

  let text: string;

  function randomText() {
    const thing = randomElement(things);
    const chars = thing.split("");
    const glitches = randomInt(0, 4);
    for (let i = 0; i < glitches; i++) {
      chars[randomInt(0, chars.length)] = junk[randomInt(0, junk.length)];
    }
    return chars.join("");
  }

  let timeout = setTimeout(randomizeText, 400);

  function randomizeText() {
    text = randomText();
    setTimeout(randomizeText, randomInt(16, 400));
  }

  onDestroy(() => clearTimeout(timeout));

  randomizeText();
</script>

{text}
