// @flow


// Types
export type FactoryProps = {
};
export type Model = {
  query: string,
  count: number
};


// Utils
export const createModel = (props: FactoryProps = {}): Model => ({
  query: '',
  count: 0
});
