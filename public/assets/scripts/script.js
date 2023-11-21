const options = {
  phoneNum: "905313725402",
  text: "Merhaba, Gym Burn hakkında bilgi almak istiyorum.",
  bottom: "10px",
  y: "10px",
  position: "right",
};

const btn = document.createElement("button");
btn.style.width = "56px";
btn.style.height = "56px";
btn.style.borderRadius = "9999px";
btn.style.position = "fixed";
btn.style.bottom = options.bottom;
btn.style[options.position] = options.y;
btn.style.backgroundImage = 'url("https://static-00.iconduck.com/assets.00/whatsapp-icon-2048x2048-bi2z5bg3.png")';
btn.style.backgroundRepeat = "no-repeat";
btn.style.backgroundPosition = "center";
btn.style.border = "none";
btn.style.backgroundColor = "#fff";
btn.style.backgroundSize = "contain";
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const whatsappURL = `https://wa.me/${options.phoneNum}?text=${encodeURIComponent(options.text)}`;
  window.open(whatsappURL, "_blank"); // Yeni pencerede WhatsApp aç
});

btn.id = "text";
btn.setAttribute("aria-label", "Name");
btn.setAttribute("aria-labelledby", "labeldiv");
document.body.appendChild(btn);