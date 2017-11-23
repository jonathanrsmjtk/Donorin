import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class Scan extends Component {

	render() {
		return(
			<View style={styles.container}>
				<Text>Scan QR</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})