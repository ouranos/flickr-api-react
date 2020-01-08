// Return photos from Flickr public feed
// https://www.flickr.com/services/feeds/photos_public.gne

// tags (Optional)
//    A comma delimited list of tags to filter the feed by.

import fetchJsonp from 'fetch-jsonp';
const PUBLIC_FEED_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

export function fetchPhotos () {
  return fetchJsonp(PUBLIC_FEED_URL, {
      jsonpCallback: 'jsoncallback',
      timeout: 3000
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.items);
      return json.items
    })
    .catch((error) => {
      console.log("Error occurred while fetching Photos");
      console.log(error);
    });
}

export default { fetchPhotos }
