let categories = [
  "smileys-and-people",
  "animals-and-nature",
  "food-and-drink",
  "travel-and-places",
  "activities",
  "objects",
  "people",
  "symbols",
  "flags",
];

async function getEmojiByCategory(category) {
  console.log("Fetching emojis for category: ", category);
  try {
    const url = "https://emojihub.yurace.pro/api/all/category/";
    const response = await fetch(url + category);
    const status = response.status;
    console.log("Status returned: ", status);
    body = await response.json();

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
      const recipeList = document.getElementById("emojiList");
      for (const emoji of emojis) {
        const emj = document.createElement("p");
        emj.innerHTML = emoji.htmlCode[0];
        emojiList.appendChild(emj);
      }
    } else {
      document.getElementById("error").innerHTML = "Unable to fetch emojis";
    }
  } catch (error) {
    console.log(error);
  }
}

window.onload = loadPage();
