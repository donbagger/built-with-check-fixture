const res = await fetch("https://api.dexpaprika.com/networks");
console.log((await res.json()).length, "networks");
