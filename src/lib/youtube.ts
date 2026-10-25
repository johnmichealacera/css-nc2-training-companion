export function youtubeEmbedUrl(url: string) {
  if (url.includes('youtu.be')) {
    return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`
  }
  return url.replace('watch?v=', 'embed/').split('&')[0]
}
