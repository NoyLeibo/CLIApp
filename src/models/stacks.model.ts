import {StackNavigationOptions} from '@react-navigation/stack';

export interface StacksModel {
  name: string;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
  key?: string;
}
