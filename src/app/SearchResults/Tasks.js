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
    `https://www.reddit.com/search.json?q=${model.query}`);

  if (error) {
    throw error;
  }

  const json = await result.json();
  return json.data.children.map(x => ({
    article: x.data.title
  }));
}

export async function intervalTrigger() {
  while(true) {
    await this.call(delay, 5000);
    this.notify();
  }
}
