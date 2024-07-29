import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView,LayoutAnimation,Platform } from "react-native";
import { KeyboardAccessoryView  } from "react-native-keyboard-accessory";


class AccessoryViewExample extends Component {
  state = {
    text: '',
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
            <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.input}/>
        </ScrollView>
        <KeyboardAccessoryView
          alwaysVisible={true} 
          //输入框的背景框的大小
          bumperHeight={100} 
          //透明度
          visibleOpacity={0.5}>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                multiline={true}
                value={text}
                onChangeText={text => this.setState({ text })}
              />
              <Button
                style={styles.textInputButton}
                title="Send"
                onPress={() => {}}
              />
            </View>
        </KeyboardAccessoryView>
      </View>
    );
  }
}


AccessoryViewExample.navigationOptions = {
  title: "View Example",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
  textInputView: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
});

export default AccessoryViewExample;

