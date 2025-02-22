import { ImgurAlbum } from '../../types'

type ResultsProps = {
  albums: ImgurAlbum[]
}

export const Results = ({ albums }: ResultsProps) => {
  if (!albums) return null

  return <div>Results</div>
}
