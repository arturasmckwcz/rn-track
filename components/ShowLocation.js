import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import colors from '../constants/colors'
import texts from '../constants/texts'

const ShowLocation = props => {
  const { latitude, longitude } = props.location
    ? props.location
    : { latitude: 'fetching...', longitude: 'fetching...' }
  return (
    <View style={styles.screen}>
      <Text>{texts.trackingBoxTitle}</Text>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text>{texts.latitude}</Text>
        </View>
        <View style={styles.box}>
          <Text>{texts.longitude}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text>{latitude}</Text>
        </View>
        <View style={styles.box}>
          <Text>{longitude}</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    minWidth: '80%',
    height: 70,
    backgroundColor: colors.showLocationBackgound,
    shadowOpacity: 0.4,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: { padding: 3, width: '45%' },
})

export default ShowLocation
