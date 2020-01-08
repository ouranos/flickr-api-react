import fetchJsonp from 'fetch-jsonp';

// tagmode = any -> return content if it matches any of the tags
const PUBLIC_FEED_URL =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any';

/**
 * Return latest photos from the public Flickr feed
 */
export function fetchPhotos (tags = '') {
  const endpoint =  !!tags
    ? `${PUBLIC_FEED_URL}&tags=${tags}`
    : `${PUBLIC_FEED_URL}`

  return fetchJsonp(endpoint, {
      jsonpCallback: 'jsoncallback',
      timeout: 3000
    })
    .then((response) => response.json())
    .then((json) => json.items)
    .catch((error) => {
      console.log("Error occurred while fetching Photos");
      console.log(error);
    });
}

export default { fetchPhotos }
