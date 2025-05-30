
const inputBox = document.getElementById("userInput");
const showButton = document.getElementById("showBtn");
const list = document.getElementById("itemList");

    showButton.addEventListener("click", () => {
      const text = inputBox.value.trim();

      if (text) {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
        inputBox.value = "";
      }
    });