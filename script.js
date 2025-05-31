const inputBox = document.getElementById("userInput");
const showButton = document.getElementById("showBtn");
const list = document.getElementById("itemList");

    showButton.addEventListener("click", () => {
      const text = inputBox.value.trim();

      if (text) {
        const li = document.createElement("li");
        li.textContent = text;
        li.style.marginBottom = "10px"


    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "🗑️";
    deleteBtn.style.marginLeft = "12px";
    deleteBtn.style.fontSize = "15px"
          
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

        li.appendChild(deleteBtn);
        list.appendChild(li);
        inputBox.value = "";
      }
    });

