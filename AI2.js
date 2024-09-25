const funFacts = [
    "AI is expected to create 58 million new jobs by 2022, according to the World Economic Forum.",
    "The first AI program was written in 1951 by Christopher Strachey, who later became director of the Programming Research Group at the University of Oxford.",
    "AI can now create art, compose music, and even write poetry!",
    "The term 'artificial intelligence' was first coined by John McCarthy in 1956.",
    "In 2020, AI was responsible for improving the efficiency of various industries, including healthcare, finance, and transportation."
];

document.getElementById("fun-fact-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById("fun-fact").textContent = funFacts[randomIndex];
});
