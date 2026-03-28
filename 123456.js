const scanBtn = document.getElementById("scanBtn");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

scanBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});
