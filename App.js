import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import StartScreen from './components/screens/StartScreen'
import TarckingScreen from './components/screens/TrackingScreen'

import colors from './constants/colors'

export default function App() {
  const [screen, setScreen] = useState('start')

  const onStartTracking = () => setScreen('tracking')

  const onStopTracking = () => setScreen('start')

  const display = {
    start: <StartScreen onPressButton={onStartTracking} />,
    tracking: <TarckingScreen onPressButton={onStopTracking} />,
  }

  return (
    <View style={styles.screen}>
      <Header />
      {display[screen]}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
