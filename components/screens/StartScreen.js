import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import texts from '../../constants/texts'
import colors from '../../constants/colors'

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>{texts.startScreenTitle}</Text>
      <Button
        title={texts.startScreenButton}
        color={colors.defaultButton}
        onPress={props.onPressButton}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
export default StartScreen
