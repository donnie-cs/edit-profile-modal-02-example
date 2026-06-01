import "./styles/main.scss";

// The "Edit profile" button will open the profile dialog.
// Wiring is added in the Edit Profile modal PR.
const trigger = document.getElementById("open-profile");

trigger?.addEventListener("click", () => {
  console.log("Edit profile clicked — modal not implemented yet.");
});
