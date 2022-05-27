getArray();
const esPluraRegex = new RegExp("ch|s|sh|ss|x|z");

async function fetchJson() {
    return jsonBody = await (await fetch("http://10.37.129.2:5500/data.json")).json();
}
function findIndexBaseOnName(name) {
    switch (name) {
        case "moon": return 0;
        case "mars": return 1;
        case "europa": return 2;
        case "titan": return 3;
    }
}
async function getArray() {
    jsonBody = await fetchJson();
    // if (document.location.href.includes("destination")) {
    
    // }
    let link = document.location.href;
    let arr = jsonBody[link.substring(24, link.indexOf("-"))];
    if (arr == undefined) {
        // if destination
        arr = jsonBody[link.substring(24, link.indexOf("-")) + "s"];

        // take destination name
        let idx = findIndexBaseOnName(link.substring(link.lastIndexOf("-") + 1, link.lastIndexOf(".")));

        
        // document.querySelector("body").style.backgroundImage = `url("${arr[idx]["images"]["webp"]}")`;
        let elements = `
        <main class="flex-center">
            <div class="main-btn-wrap flex-center">
                <img src=${arr[idx]["images"]["png"]} alt="">
            </div>
            <div class="main-text flex-center">
                <h4 class="main-text-subhead">So, you want to travel to</h4>
                <h1 class="main-text-head">space</h1>
                <p class="main-text-descri">Let's face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we'll give you a truly out of this world experience!</p>        
            </div>
    
        </main>`;
        document.querySelector("body").insertAdjacentHTML("beforeend", elements);

    }
    else {
        // other options
        console.log("object");
    }
}
