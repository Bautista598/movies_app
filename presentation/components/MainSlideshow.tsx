import { View, Text, Dimensions, useWindowDimensions } from 'react-native'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'

import { Movie } from '@/infrastructure/interfaces/movieDB.interface'
import MoviesPoster from './MoviesPoster'

import { useRef } from 'react'

interface Props {
	movies: Movie[]
}

const MainSlideshow = ({ movies }: Props) => {
	const ref = useRef<ICarouselInstance>(null)
	const width = useWindowDimensions().width

	return (
		<View className="h-[250px] w-full">
			<Carousel
				data={movies}
				renderItem={({ item }) =>
					MoviesPoster({ id: item.id, poster: item.poster })
				}
				ref={ref}
				width={200}
				height={350}
				style={{
					width: width,
					height: 350,
					justifyContent: 'center',
					alignItems: 'center'
				}}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50
				}}
				defaultIndex={1}
			/>
		</View>
	)
}

export default MainSlideshow
