document.getElementById("scanBtn").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    document.getElementById("preview").src = URL.createObjectURL(file);
  }
});
