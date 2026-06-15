import "./styles/main.scss";
import "./styles/modal.scss";
import { initProfileModal } from "./components/modal";

const trigger = document.getElementById("open-profile");
if (trigger) {
  initProfileModal(trigger);
}
