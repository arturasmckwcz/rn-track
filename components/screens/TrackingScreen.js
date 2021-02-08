import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'
// import Geolocation from 'react-native-geolocation-service'
// Geolocation.setRNConfiguration({
//   skipPermissionRequests: false,
//   authorizationLevel: 'whenInUse',
// })
const Geolocation = navigator.geolocation

import ShowLocation from '../ShowLocation'

import texts from '../../constants/texts'
import colors from '../../constants/colors'
import params from '../../constants/params'

const TrackingScreen = props => {
  const [location, setLocation] = useState()
  const watchID = useRef()

  useEffect(() => {
    watchID.current = Geolocation.watchPosition(
      position =>
        setLocation({
          ...position.coords,
        }),
      error =>
        Alert.alert(
          'Can not get device location!',
          'Please check device setup.'
        ),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: params.defaultGPSTimeout,
      }
    )
    return () => {
      Geolocation.clearWatch(watchID.current)
      Geolocation.stopObserving()
    }
  }, [])

  return (
    <View style={styles.screen}>
      <ShowLocation location={location} />
      <Button
        title={texts.trackingScreenButton}
        color={colors.defaultButton}
        onPress={props.onPressButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})

export default TrackingScreen
