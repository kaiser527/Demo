import { colors } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const FavoritesScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerTitle: 'Favorites',
						headerStyle: {
							backgroundColor: '#1a1a1a',
						},
						headerTintColor: colors.text,
					}}
				/>
			</Stack>
		</View>
	)
}

export default FavoritesScreenLayout
