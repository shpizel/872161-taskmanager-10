import {getBoardComponent} from './components/board.js';
import {getFiltersComponent} from './components/filters.js';
import {getMenuComponent} from './components/menu.js';
import {getTaskHTML, getTaskEditHTML, getShowmoreButtonHTML} from './components/tasks.js';
import {render} from './components/utils.js';


const mainNode = document.querySelector(`.main`);
const mainControlNode = document.querySelector(`.main__control`);

render(getMenuComponent(), mainControlNode);
render(getFiltersComponent(), mainNode);
render(getBoardComponent(), mainNode);

const boardNode = mainNode.querySelector(`.board`);
const boardTasksNode = mainNode.querySelector(`.board__tasks`);
render(getTaskEditHTML(), boardTasksNode);
for (let i = 0; i < 3; i++) {
  render(getTaskHTML(), boardTasksNode);
}

render(getShowmoreButtonHTML(), boardNode);
