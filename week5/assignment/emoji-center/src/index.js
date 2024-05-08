import "../css/style.css";

let categories = [
  "smileys-and-people",
  "animals-and-nature",
  "food-and-drink",
  "travel-and-places",
  "activities",
  "objects",
  "symbols",
  "flags",
];

async function getEmojiByCategory(category) {
  console.log("Fetching emojis for category: ", category);
  try {
    const url = process.env.EMOJIHUB_URL;
    const response = await fetch(url + category);
    const status = response.status;
    console.log("Status returned: ", status);
    const body = await response.json();

    return { status: status, data: body };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
}

async function loadPage() {
  try {
    const random = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[random];

    const emojiResponse = await getEmojiByCategory(randomCategory);

    if (emojiResponse.status === 200) {
      const emojis = emojiResponse.data;
      const emojiList = document.getElementById("emojiList");
      for (const emoji of emojis) {
        const theList = document.createElement("li");
        const emojiDiv = document.createElement("div");
        emojiDiv.className = "class-div-1";
        const emjImg = document.createElement("p");
        emjImg.innerHTML = emoji.htmlCode[0];
        const emjName = document.createElement("p");
        let theName = emoji.name.toLowerCase();
        if (theName.includes("≊")) {
          theName = theName.substring(theName.indexOf("≊") + 1, theName.length);
        }
        if (theName.includes("face with ")) {
          theName = theName.substring(
            theName.indexOf("face with ") + 10,
            theName.length
          );
        }
        emjName.innerHTML = theName;
        emojiDiv.appendChild(emjImg);
        emojiDiv.appendChild(emjName);
        theList.appendChild(emojiDiv);
        emojiList.appendChild(theList);
      }
    } else {
      document.getElementById("error").innerHTML = "Unable to fetch emojis";
    }
  } catch (error) {
    console.log(error);
  }
}

window.onload = loadPage();
