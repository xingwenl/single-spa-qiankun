import { registerMicroApps, start } from 'qiankun';
import { lifeCycles } from "./appLoading";
import { appsUrl } from '@/config';
registerMicroApps([
  {
    name: "vue-single-page",
    entry: appsUrl.vueSpa,
    container: "#vueSingleContainer",
    activeRule: genActiveRule("/vue-single"),
  }
], {
  ...lifeCycles,
})
start();

function genActiveRule(routerPrefix: string) {
  return (location: Location) => location.pathname.startsWith(routerPrefix);
}