//
function firstVowelExtracted(input: string) {
  const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];
  if (!input) return ["", ""];
  const firstChar = input.substr(0, 1);
  if (!vowels.some((v) => vowels.includes(firstChar)))
    return firstVowelExtracted(input.substr(1));
  return [input.substr(0, 1), input.substr(1)];
}

function toKontti(input: string) {
  const first = input.substr(0, 1);
  const [firstVowel, rest] = firstVowelExtracted(input);
  const appliedFirstVowel = firstVowel === first ? "" : firstVowel;
  return `k${"o"}${rest} ${first}${appliedFirstVowel}ntti`;
}

export function translate(input: string) {
  const words = input.split(/[\s,.:?!;]+/).filter(Boolean);
  const translated = words.map(toKontti);
  return translated.join(" ");
}
