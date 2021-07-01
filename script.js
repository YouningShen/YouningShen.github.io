var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

var factList = [
  "The concentration of carbon dioxide (CO2)​​​​​​​ in our atmosphere, as of May 2020, is the highest it has been in human history", 
  "The net damage costs of climate change are likely to be significant and to increase over time",
  "189 countries have ratified the 2015 Paris Agreement, agreeing to limit global warming and adapt to climate change, partly by protecting nature", 
  "The 20 warmest years on record have been in the past 22 years", 
  "Average wildlife populations have dropped by 60 per cent in just over 40 years", 
  "More than 1 million species are at risk of extinction by climate change", 
  "Climate change is already happening, and it’s detrimental to human life, too"
];

var factQuote = document.getElementById("factQuote");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  factQuote.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
