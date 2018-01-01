// @flow


// Types
export type FactoryProps = {
  text: string
};
export type Model = {
  counter: number,
  text: string
};


// Utils
export const createModel = ({
  text = 'No text'
}: FactoryProps = {}): Model => ({
  counter: 0,
  text
});
