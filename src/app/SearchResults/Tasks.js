// @flow
import * as Model from './Model';


// Types
type Props = { model: Model.Model };


// Utils
const fetch = window.fetch.bind(window);


/**
 * Get search results by given query and returns an array of
 * search items
 * @param  {Props} props
 * @return {Promise}
 */
export async function findResults({ model }: Props): Promise<Array<Model.SearchItemType>> {
  const { result, error } = await this.call(fetch,
    `http://www.reddit.com/search.json?q=${model.query}`);
  if (error) {
    throw new Error('Search was failed to execute');
  }

  const json = await result.json();
  return json.data.children.map(x => ({
    article: x.data.title
  }));
}
