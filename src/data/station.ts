export type Station = {
    id: string // A globally unique identifier for the station
    name: string // The name of the station
    url: string // The stream URL provided by the user
    urlResolved: string // An automatically "resolved" stream URL.
    homepage: string // URL to the homepage of the stream.
    favicon: string // URL to an icon or picture that represents the stream. (PNG, JPG)
    tags: string[] // Tags of the stream
    country: string // Full name of the country
    countryCode: string // Official countrycodes as in ISO 3166-1 alpha-2
    state: string // Full name of the entity where the station is located inside the country
    language: string[] // Languages that are spoken in this stream.
    votes: number // Number of votes for this station
    clickCount: number // Clicks within the last 24 hours
  }