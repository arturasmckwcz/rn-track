import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import texts from '../constants/texts'
import colors from '../constants/colors'

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{texts.headerTitle}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    paddingBottom: 10,
    backgroundColor: colors.headerBackground,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: { fontSize: 20 },
})
export default Header
