import {render, waitFor} from '@testing-library/react';
import List from './List';
import * as api from './api';
jest.mock("./api");

test('the data is FalconSat', async () => {
    await expect(api.getList()).resolves.toBe('FalconSat');
  });
  
  test('the fetch fails with an error', async () => {
    await expect(api.getList()).rejects.toMatch('error');
  });

