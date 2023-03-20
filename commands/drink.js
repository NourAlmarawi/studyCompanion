const hydrateReminders = [
    "Stay hydrated, stay healthy!",
    "Water is life. Drink it up!",
    "Thirsty? Drink water!",
    "Hydrate or die-drate!",
    "Water is your best friend. Don't forget to drink it!",
    "Aim for at least 8 glasses of water a day!",
    "Hydration is key to a happy body!",
    "Water, water, everywhere - so drink it up!",
    "Water is the ultimate elixir of life. Keep sipping!",
    "The solution to pollution is hydration!",
    "Water is the fuel that keeps you going. Keep drinking!",
    "Drink water, it's good for your skin too!",
    "H2O is the way to go!",
    "Water is a lifesaver. Drink up!",
    "Hydrate like it's your job!",
    "Stay hydrated, stay sharp!",
    "Water is the best detox for your body. Drink up!",
    "Drink more water, feel less tired!",
    "Water is nature's own energy drink!",
    "Drinking water is a habit worth keeping!",
    "Drink water like your life depends on it!",
    "The more water you drink, the better you feel!",
    "Dehydration is not a good look. Drink water!",
    "Water is the foundation of good health. Drink up!",
    "Hydrate to dominate!",
    "Water is the secret to a long and healthy life!",
    "When in doubt, drink water!",
    "Drink water and sparkle from the inside out!",
    "Water: the original thirst quencher!",
    "Water is the best gift you can give your body!",
    "Drink water and do great things!",
    "Water is the ultimate mood enhancer. Drink up!",
    "Your body is a temple, so keep it hydrated!",
    "Water is the answer to all your problems. Okay, most of them!",
    "Hydrate now, thank yourself later!",
    "Water is the most underrated superfood!",
    "Drinking water is the ultimate act of self-care!",
    "You can't spell hydration without H2O!",
    "Water is the key to unlocking your full potential!",
    "Drink water and conquer the world!",
    "Water is the fountain of youth. Drink up!",
    "Aim high, hydrate higher!",
    "Hydration is the best motivation!",
    "Water is the glue that holds your body together. Drink up!",
    "Keep calm and drink water!",
    "Water is the best way to beat the heat!",
    "Water is the foundation of life. Drink up!",
    "Drink water and be merry!",
    "Water is the ultimate hangover cure!",
    "Water is the ultimate stress buster!",
    "Drink water and be unstoppable!",
    "Water is the best thing you can put in your body!",
    "Water is your body's best friend. Don't forget to drink it!"
];

module.exports = function (msg, args) {
    const r = Math.floor(Math.random() * hydrateReminders.length);
    msg.reply(hydrateReminders[r] + ' 💦');
}
