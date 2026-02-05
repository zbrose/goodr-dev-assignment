class GoodrPopup {
  constructor(container) {
    this.container = container;
    this.overlay = container.querySelector(".modal-overlay");
    this.closeBtn = container.querySelector(".close-modal-btn");
    this.storageKey = `goodr_popup_seen_${container.dataset.sectionId}`;
    this.delay = parseInt(container.dataset.delay) * 1000;

    this.init();
  }

  init() {
    if (localStorage.getItem(this.storageKey)) return;

    setTimeout(() => {
      this.container.classList.add("is-active");
      this.container.setAttribute("aria-hidden", "false");
    }, this.delay);

    this.closeBtn.addEventListener("click", () => this.close());

    const form = this.container.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => this.handleSignup(e));
    }
  }

  close() {
    this.container.classList.remove("is-active");
    this.container.setAttribute("aria-hidden", "true");
    localStorage.setItem(this.storageKey, "true");
  }

  handleSignup(e) {
    e.preventDefault();
    console.log(
      "Integration Hook: Data would be sent to Shopify/Klaviyo here.",
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".custom-modal-section");
  if (popup) new GoodrPopup(popup);
});
