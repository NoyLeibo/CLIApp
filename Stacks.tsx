import {StacksModel} from './src/models/stacks.model';
import HomeScreen from './src/screens/HomeScreen';
import TodosScreen from './src/screens/TodosScreen';

const stacks: StacksModel[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {title: 'Home Screen!'},
  },
  {name: 'Todos', component: TodosScreen, options: {title: 'Todos Screen!'}},
];

export default stacks;
