"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
//
function firstVowelExtracted(input) {
    var vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö"];
    if (!input)
        return ["", ""];
    var firstChar = input.substr(0, 1);
    if (!vowels.some(function (v) { return vowels.includes(firstChar); }))
        return firstVowelExtracted(input.substr(1));
    return [input.substr(0, 1), input.substr(1)];
}
function toKontti(input) {
    var first = input.substr(0, 1);
    var _a = firstVowelExtracted(input), firstVowel = _a[0], rest = _a[1];
    var appliedFirstVowel = firstVowel === first ? "" : firstVowel;
    return "k".concat("o").concat(rest, " ").concat(first).concat(appliedFirstVowel, "ntti");
}
function translate(input) {
    var words = input.split(/[\s,.:?!;]+/).filter(Boolean);
    var translated = words.map(toKontti);
    return translated.join(" ");
}
exports.translate = translate;
