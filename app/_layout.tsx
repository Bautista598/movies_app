import { View, Text } from 'react-native'
import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '../global.css'

const queryClient = new QueryClient()

const RootLayout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<View>
				<Text className="text-4xl text-blue-600 font-bold">RootLayout</Text>
			</View>
		</QueryClientProvider>
	)
}

export default RootLayout
