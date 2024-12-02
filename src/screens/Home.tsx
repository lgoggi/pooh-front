import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import TabBar from "../components/TabBar";
import Profile from "./Profile";

export type bottomTabParamList = {
  Feed: undefined;
  Profile: { id: string } | undefined;
};
const Tab = createBottomTabNavigator();
const Home = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
