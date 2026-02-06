class GoodrPopup {
  constructor(container) {
    this.container = container;
    this.overlay = container.querySelector(".gdr-modal__overlay");
    this.closeBtn = container.querySelector(".gdr-modal__close-btn");
    this.declineBtn = container.querySelector(".gdr-modal__button--decline");
    this.confirmBtn = container.querySelector(".gdr-modal__button--confirm");
    this.storageKey = `goodr_popup_seen_${container.dataset.sectionId}`;
    this.delay = parseInt(container.dataset.delay) * 1000 || 3000;

    this.init();
  }

  init() {
    if (sessionStorage.getItem(this.storageKey)) return;

    setTimeout(() => {
      this.show();
    }, this.delay);

    this.closeBtn.addEventListener("click", () => this.close());

    if (this.declineBtn) {
      this.declineBtn.addEventListener("click", () => this.close());
    }

    if (this.confirmBtn) {
      this.confirmBtn.addEventListener("click", (e) => this.handleConfirm(e));
    }

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.container.classList.contains("gdr-modal--active")
      ) {
        this.close();
      }
    });
  }

  show() {
    this.container.classList.add("gdr-modal--active");
    this.overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  close() {
    // Add closing animation class
    this.container.classList.add("gdr-modal--closing");

    // Wait for animation to complete before hiding
    setTimeout(() => {
      this.container.classList.remove(
        "gdr-modal--active",
        "gdr-modal--closing",
      );
      this.overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      sessionStorage.setItem(this.storageKey, "true");
    }, 400); // Match CSS transition duration
  }

  handleConfirm(e) {
    e.preventDefault();
    const shopUrl = this.confirmBtn.getAttribute("href") || "/collections/all";
    sessionStorage.setItem(this.storageKey, "true");
    window.location.href = shopUrl;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".gdr-modal");
  if (popup) new GoodrPopup(popup);
});
