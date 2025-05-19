document.addEventListener("DOMContentLoaded", function () {
  const url = document.getElementById("name");
  const btn = document.getElementById("generate");
  const qr = document.getElementById("qr");

  if (url && btn) {
    btn.addEventListener("click", function () {
      link = url.value.trim();
      localStorage.setItem("qrLink", link);
      console.log("Stored link:", link);
    });
  }

  if (qr) {
    const storedLink = localStorage.getItem("qrLink");
    document.getElementById("qr").innerHTML = "";
    const qrCode = new QRCode(document.getElementById("qr"), {
      text: storedLink,
      width: 200,
      height: 200,
    });
  }
});


const downloadBtn = document.querySelector(".download");
if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    const img = qr.querySelector("img");
    if (img) {
      const a = document.createElement("a");
      a.href = img.src;
      a.download = "qr-code.png";
      a.click();
    }
  });
}
