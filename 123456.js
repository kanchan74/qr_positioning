const scanBtn = document.getElementById("scanBtn");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

// Open camera / file picker
scanBtn.addEventListener("click", () => {
  fileInput.click();
});

// Show preview after selecting image
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});
