import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import TruckContainer from './containers/TruckContainer';
import { configure, shallow, assert } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

test('renders learn react link', () => {
  render(<TruckContainer />);
  const linkElement = screen.getByText(/SCM Application/i);
  expect(linkElement).toBeInTheDocument();
});

/*configure({ adapter: new Adapter() });
describe('Container includes TruckDatagrid")', () => {
  it("There is one datagrid", () => {
    const wrapper = shallow(<TruckContainer />);
    expect(wrapper.find("img").length>0).toBe(true);
  });

  it("There is min five span-elements", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("span").length > 4).toBe(true);
  });
});
*/
