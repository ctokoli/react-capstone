import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardComponent from '../Components/CardComponent';
import DetailsCard from '../Components/DetailsCardComponent';

describe('Test for the components', () => {
  it('should render the cardComponent', () => {
    const item = [];
    const card = renderer.create(
      <CardComponent
        item={item}
      />,
    ).toJSON();
    expect(card).toMatchSnapshot();
  });
  it('should the cardComponent', () => {
    const item = [];
    const key = 'value';
    render(<DetailsCard key={key} item={item} />);
    const headings = screen.getByText('Total Population');
    expect(headings).toBeInTheDocument();
  });
});
