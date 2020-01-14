// import { fetchPhotos } from './FlickrFeed';
import FlickrFeed from './FlickrFeed';
import fetchJsonp from 'fetch-jsonp';
import responseMock from './responseMock';

jest.mock('fetch-jsonp');

fetchJsonp.mockImplementation(() =>
  Promise.resolve({ json: () => responseMock })
);

describe('Flickr API service', () => {
  test('search photos by tags', async () => {
    const photos = await FlickrFeed.publicPhotos('kitten');

    expect(fetchJsonp).toHaveBeenCalledWith(
      'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any&tags=kitten',
      { jsonpCallback: 'jsoncallback', timeout: 3000 }
    );

    expect(photos).toHaveLength(20);
  });
});
