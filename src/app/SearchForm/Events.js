// @flow
import { evt } from 'mangojuice-core';

export Search = evt((query) => ({ query }));
export ChangeQuery = evt((query) => ({ query }));
