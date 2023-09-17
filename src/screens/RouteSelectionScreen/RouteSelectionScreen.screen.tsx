import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";

import { styles } from "./RouteSelectionScreen.styles";
import Route from "../../components/Route/Route.components";

const RouteSelectionScreen = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.198609097460825,
          longitude: -45.90697967826549,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        }}
      />
      <View style={styles.routeSelectionContainer}>
        <Text style={styles.routeSelectionTitle}>
          Select the optimal route for you today.
        </Text>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Route />
        </ScrollView>
      </View>
    </View>
  );
};

export default RouteSelectionScreen;
