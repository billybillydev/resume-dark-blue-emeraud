import '$/styles/index.css';
import { App } from '$/views/app.view';
import Alpine from '$/ui/scripts/alpine';

window.Alpine = Alpine;

Alpine.start();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = String(<App />);
