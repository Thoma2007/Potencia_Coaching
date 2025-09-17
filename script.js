const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalIcon = document.getElementById("modalIcon");
const closeBtn = document.getElementById("modalClose");

function openModalFromButton(button) {
  const title = button.getAttribute("data-title");
  const description = button.getAttribute("data-description");
  const features = button.getAttribute("data-features")?.split(",") || [];
  const icon = button.getAttribute("data-icon");

  modalTitle.textContent = title || "Título del ítem";
  modalDescription.textContent = description || "Sin descripción disponible.";

  modalFeatures.innerHTML = "";
  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature.trim();
    modalFeatures.appendChild(li);
  });

  // Reemplazar clase del ícono del modal
  modalIcon.className = `modal-icon icon icon-${icon}`;

  modal.style.display = "flex";
}

document
  .querySelectorAll(".btn-outline, .btn-filled, .btn-blue")
  .forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModalFromButton(btn);
    });
  });

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
