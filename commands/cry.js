
const cry = [
    "معلش يا ضنايا",
    "الحياة صعبة",
    "خلص لا تبكي",
    "يلا هانت انت قدها",
    "طيب ما حدا قلك تختار هيك تخصص",
    "😭😭😭😭😭😭😭😭😭",
    "خلص خلص دادي دادي لا تبكي",
    "pat pat pat",
    "save your tears for another day",
    "hora hora GAMBARE GAMBAREE",
    "here are some tissues",
    "here is my shoulder to cry on",

];

module.exports = function (msg, args) {
    const r = Math.floor(Math.random() * cry.length);
    msg.reply(cry[r] + "😭😭😭");
}
