import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={styles.background}
      ></LinearGradient>
      <StatusBar style="auto" />
      <View style={styles.view1}>
        <Text style={styles.text1}>LOGIN</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.image}>
          <img
            style={styles.imageAvatar}
            src={require("/assets/avatar_user.png")}
          />
          <img
            style={styles.imageLock}
            src={require("/assets/lock.png")}
          />
          <img
            style={styles.imageEye}
            src={require("/assets/eye.png")}
          />
        </View>
        <TextInput style={styles.inputName} />
        <Text style={styles.name}>Name</Text>
        <TextInput style={styles.inputPassword} />
        <Text style={styles.password}>Password</Text>
      </View>

      <View style={styles.view3}>
        <Button style={styles.buttonLogin} textColor="white">
          LOGIN
        </Button>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text2}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  view1: {
    position: "absolute",
    width: "350px",
    height: "400px",
  },
  text1: {
    fontWeight: "700",
    fontSize: "30px",
  },
  view2: {
    position: "absolute",
  },
  imageAvatar: {
    position: "absolute",
    top: "30px",
    left: "10px",
  },
  imageLock: {
    position: "absolute",
    top: "130px",
    left: "10px",
  },
  imageEye:{
    position: "absolute",
    top: "130px",
    left: "280px",
  },
  inputName: {
    marginVertical: "20px",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    borderColor: "#F2F2F2",
    width: "330px",
    height: "54px",
    top: "192px",
    left: "15px",
    borderWidth: "1px",
  },
  name: {
    bottom: "60px",
    left: "60px",
    fontWeight: "400",
    fontSize: "18px",
  },
  inputPassword: {
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    borderColor: "#F2F2F2",
    width: "330px",
    height: "54px",
    top: "192px",
    left: "15px",
    fontWeight: "400",
    fontSize: "18px",
    borderWidth: "1px",
  },
  password: {
    bottom: "40px",
    left: "60px",
    fontWeight: "400",
    fontSize: "18px",
  },
  view3: {
    position: "absolute",
  },
  buttonLogin: {
    top: "150px",
    backgroundColor: "#060000",
    borderRadius: "2px",
    width: "330px",
  },
  view4: {
    position: "absolute",
  },
  text2: {
    top: "200px",
    fontWeight: "700",
    fontSize: "20px",
  },
});
