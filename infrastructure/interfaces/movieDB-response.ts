export interface MovieDBMoviesResponse {
	id: number
	title: string
	original_title: string
	overview: string
	release_date: string
	poster_path: string
	backdrop_path: string
	vote_average: number
	runtime: number
	genres: Genre[]
	production_companies: ProductionCompany[] // Added production companies property
	budget: number // Added budget property
}

export interface ProductionCompany {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

export interface Dates {
	maximum: Date
	minimum: Date
}

export interface Result {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: OriginalLanguage
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: Date
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface Genre {
	id: number
	name: string
}

export enum OriginalLanguage {
	En = 'en',
	Es = 'es',
	LV = 'lv',
	Nl = 'nl'
}
