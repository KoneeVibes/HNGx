export type RatingBoxProps = {
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    fraction: number,
    percentage: number,
    color?: string,
};

export type CardProps = {
    date: string
    filePath: string
    title: string
    originCountry: string | undefined
    genres: string
    id: number
} & RatingBoxProps;

export type Movie = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type PrimaryAreaProps = {
    id: string | undefined
}

export type MenubarProps = {
    left: string
    display: string
    position: string
}

export type MainContentProps = {
    position: string
    right: string
    id: string | undefined
}

export type AdBoxProps = {
    leadText: string
    subText: string
    buttonText: string
    minimizeSb: boolean
    display: "none" | "unset"
}