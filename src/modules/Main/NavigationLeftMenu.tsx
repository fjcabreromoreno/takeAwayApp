import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerNavigator from './Drawer';

const Drawer = createDrawerNavigator();

const NavigationLeftMenu: React.FC<{}> = () => {
    return <DrawerNavigator />;
};

export default NavigationLeftMenu;
