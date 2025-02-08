let currentStep = 1;

// Function to show text with transition
const showText = (elementId, delay) => {
  setTimeout(() => {
    document.getElementById(elementId).classList.add("visible");
  }, delay);
};

// Function to show button with pop-up animation
const showButton = (elementId, delay) => {
  setTimeout(() => {
    document.getElementById(elementId).classList.remove("hidden");
  }, delay);
};

// Function to create floating emojis
const createFloatingEmojis = (emoji = "❤️", count = 20) => {
  const emojiContainer = document.getElementById("emoji-container");
  for (let i = 0; i < count; i++) {
    const emojiElement = document.createElement("div");
    emojiElement.className = "emoji";
    emojiElement.innerText = emoji;
    emojiElement.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    emojiElement.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    emojiContainer.appendChild(emojiElement);
  }
};

// Function to clear floating emojis
const clearFloatingEmojis = () => {
  const emojiContainer = document.getElementById("emoji-container");
  emojiContainer.innerHTML = "";
};

// Start playing background music after user interaction
const backgroundMusic = document.getElementById("background-music");
document.body.addEventListener("click", () => {
  backgroundMusic.play();
}, { once: true }); // Only trigger once

// Step 1: Initial Screen
showText("text1", 0); // Show first text immediately
showText("text2", 2000); // Show second text after 2 seconds
setTimeout(() => {
  document.getElementById("text3").classList.add("visible"); // Show "Shall we proceed?" after 4 seconds
  document.getElementById("buttons").classList.remove("hidden"); // Show buttons
}, 4000);

// Handle "No" button click
document.getElementById("noButton").addEventListener("click", () => {
  document.getElementById("noButton").classList.add("hidden");
  document.getElementById("yesButton").style.transform = "scale(1.5)";
});

// Handle "Yes" button click
document.getElementById("yesButton").addEventListener("click", () => {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
  currentStep = 2;

  // Step 2: GIF and Text
  showText("text4", 0); // Show first text immediately
  showText("text5", 2000); // Show second text after 2 seconds
  showButton("proceedButton1", 4000); // Show proceed button after all texts
});

// Proceed to Step 3
document.getElementById("proceedButton1").addEventListener("click", () => {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
  currentStep = 3;

  // Step 3: Images and Text
  showText("text6", 0); // Show first text immediately
  showText("text7", 3000); // Show second text after 3 seconds
  showButton("proceedButton2", 5000); // Show proceed button after all texts
});

// Proceed to Step 4
document.getElementById("proceedButton2").addEventListener("click", () => {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step4").classList.remove("hidden");
  currentStep = 4;

  // Step 4: Text and GIF
  showText("text8", 0); // Show first text immediately
  showText("text9", 2000); // Show second text after 2 seconds
  showButton("proceedButton3", 4000); // Show proceed button after all texts
});

// Proceed to Step 5
document.getElementById("proceedButton3").addEventListener("click", () => {
  document.getElementById("step4").classList.add("hidden");
  document.getElementById("step5").classList.remove("hidden");
  currentStep = 5;

  // Step 5: Sequential Texts
  const texts = ["text10", "text11", "text12", "text13", "text14"];
  let textIndex = 0;

  const showNextText = () => {
    if (textIndex < texts.length) {
      showText(texts[textIndex], 0); // Show current text
      textIndex++;
      setTimeout(showNextText, 3000); // Show next text after 3 seconds
    } else {
      showButton("proceedButton4", 0); // Show proceed button after all texts
    }
  };

  showNextText();
});

// Proceed to Step 6
document.getElementById("proceedButton4").addEventListener("click", () => {
  document.getElementById("step5").classList.add("hidden");
  document.getElementById("step6").classList.remove("hidden");
  currentStep = 6;

  // Step 6: Final Question
  showText("text15", 0); // Show first text immediately
  showText("text16", 2000); // Show second text after 2 seconds
  setTimeout(() => {
    document.getElementById("finalButtons").classList.remove("hidden"); // Show final buttons
  }, 4000); // Show buttons after all texts

  // Increase speed of ❤️ emojis
  clearFloatingEmojis();
  createFloatingEmojis("❤️", 30); // More emojis for Step 6
});

// Handle Final "Yes" button click
document.getElementById("finalYes").addEventListener("click", () => {
  document.getElementById("step6").classList.add("hidden");
  document.getElementById("step7").classList.remove("hidden");
  document.getElementById("responseText").innerText = "Lesssgooooooo";
  document.getElementById("responseGif").src = "gif1.gif";

  // Add dynamic text animation
  const dynamicText = document.createElement("div");
  dynamicText.className = "dynamic-text";
  dynamicText.innerText = "Lessssgoooooooo!";
  document.getElementById("step7").appendChild(dynamicText);

  // Hide buttons and show big text
  setTimeout(() => {
    document.getElementById("finalButtons").classList.add("hidden");
    document.getElementById("bigText").innerText = "I'll be back";
    document.getElementById("bigText").classList.add("visible");
  }, 3000);
});

// Handle Final "No" button click
document.getElementById("finalNo").addEventListener("click", () => {
  document.getElementById("step6").classList.add("hidden");
  document.getElementById("step7").classList.remove("hidden");
  document.getElementById("responseText").innerText = "MY LOVE, ARE YOU SURE YOU DON’T WANT TO BE MY VALENTINE?";
  document.getElementById("responseText").style.color = "darkred"; // Ensure text is dark red
  document.getElementById("responseGif").src = "gif4.gif"; // Show GIF
  document.getElementById("responseGif").classList.remove("hidden"); // Ensure GIF is visible
  document.getElementById("retryButtons").classList.remove("hidden"); // Show retry buttons

  // Replace ❤️ with 💔 emojis
  clearFloatingEmojis();
  createFloatingEmojis("💔", 20);
});

// Handle "Yes, don't bother me" button click
document.getElementById("retryYes").addEventListener("click", () => {
  document.getElementById("step7").classList.add("hidden");
  showBouncingText("I'll be back");
});

// Handle "Try harder" button click
document.getElementById("retryNo").addEventListener("click", () => {
  document.getElementById("step7").classList.add("hidden");
  showBouncingText("I'll be back");
});

// Function to show bouncing text
const showBouncingText = (text) => {
  const bouncingText = document.createElement("div");
  bouncingText.className = "bouncing-text";
  bouncingText.innerText = text;
  document.body.appendChild(bouncingText);

  // Remove the text after 5 seconds (optional)
  setTimeout(() => {
    bouncingText.remove();
  }, 5000);
};

// Create floating ❤️ emojis on page load
createFloatingEmojis();