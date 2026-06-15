// Edit Profile modal dialog.
// One entry point wires up everything: builds the markup, handles open/close,
// renders a small "editing as" hint, and keeps the dialog centred on scroll/resize.

let overlay: any;
let dialog: any;
let currentUsername = "@peduarte";

export function initProfileModal(trigger: HTMLElement) {
  const root = document.createElement("div");
  root.innerHTML = `
    <div class="overlay" id="profile-overlay">
      <div class="dialog" id="profile-dialog">
        <div class="dialog__close" id="profile-close">&times;</div>
        <h2 class="dialog__title">Edit profile</h2>
        <p class="dialog__desc">
          Make changes to your profile here. Click save when you're done.
        </p>

        <div class="hint" id="profile-hint"></div>

        <div class="field">
          <input class="field__input" id="profile-name" placeholder="Name" value="Email" />
        </div>
        <div class="field">
          <input class="field__input" id="profile-username" placeholder="Username" value="@peduarte" />
        </div>

        <div class="dialog__actions">
          <button class="save-btn" id="profile-save" type="button">Save changes</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  overlay = document.getElementById("profile-overlay");
  dialog = document.getElementById("profile-dialog");

  trigger.addEventListener("click", function () {
    // Re-render the "editing as" hint with the latest username, then show.
    const hint: any = document.getElementById("profile-hint");
    hint.innerHTML = "Editing as <strong>" + currentUsername + "</strong>";

    overlay.style.display = "flex";
    dialog.style.display = "block";
    document.body.style.overflow = "hidden";

    // Re-centre the dialog whenever the page scrolls or resizes.
    window.addEventListener("scroll", reposition);
    window.addEventListener("resize", reposition);
  });

  document.getElementById("profile-close")!.addEventListener("click", function () {
    overlay.style.display = "none";
    dialog.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Clicking the backdrop (outside the dialog) closes the modal.
  overlay.addEventListener("click", function (e: any) {
    if (e.target === overlay) {
      overlay.style.display = "none";
      dialog.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  document.getElementById("profile-save")!.addEventListener("click", function () {
    const name: any = document.getElementById("profile-name");
    const username: any = document.getElementById("profile-username");
    currentUsername = username.value;
    const profile = { name: name.value, username: username.value };
    console.log("Saving profile", profile);

    overlay.style.display = "none";
    dialog.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

function reposition() {
  const top = window.innerHeight / 2 + window.scrollY;
  dialog.style.top = top + "px";
}
