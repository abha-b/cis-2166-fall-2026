document.addEventListener("keydown", (event) => {
  const scroller = event.target.closest(".table-scroll");
  if (scroller && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
    event.preventDefault();
    scroller.scrollBy({ left: event.key === "ArrowRight" ? 96 : -96 });
  }
});

document.addEventListener("click", (event) => {
  const detailsAction = event.target.closest("[data-details-action]");
  if (detailsAction) {
    const shouldOpen = detailsAction.dataset.detailsAction === "open";
    document.querySelectorAll("#materials details.material-group").forEach((detail) => { detail.open = shouldOpen; });
  }
  if (event.target.closest("[data-print-page]")) {
    const cleanUpPrintMode = () => document.body.classList.remove("print-syllabus");
    document.body.classList.add("print-syllabus");
    window.addEventListener("afterprint", cleanUpPrintMode, { once: true });
    window.print();
  }
  const emailButton = event.target.closest("[data-reveal-email]");
  if (emailButton) {
    const address = String.fromCharCode(97,98,104,97,46,98,101,108,111,114,107,97,114,64,116,101,109,112,108,101,46,101,100,117);
    const output = document.querySelector("[data-email-output]");
    const link = document.createElement("a");
    link.href = "mailto:" + address; link.textContent = address;
    output.replaceChildren(link); output.hidden = false; emailButton.remove(); link.focus();
  }
});
