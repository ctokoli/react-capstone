import reducer, { filterRegions } from '../Redux/covidSlice';

const mockData = [];

describe('Testing the reducer function', () => {
  it('should show empty state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      { data: [], filterData: [] },
    );
  });

  it('should show empty state', () => {
    const previousState = mockData.data;
    expect(reducer(previousState, filterRegions())).toEqual(
      { data: [], filterData: [] },
    );
  });
});
