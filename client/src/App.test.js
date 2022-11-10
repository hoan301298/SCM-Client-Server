import React from 'react';
import { render, screen } from '@testing-library/react';
import TruckContainer from './containers/TruckContainer';
import LocationContainer from './containers/LocationContainer';
import TruckDatagridComponent from './components/TruckDatagridComponent';

const trucks =[
  { id: 1, licenceplate: 'ABC-123', name: 'Volvo'},
  { id: 2, licenceplate: 'XYZ-321', name: 'Scania'},
  { id: 3, licenceplate: 'AKU-313', name: 'Volvo' }
];

test('renders learn react link', () => {
  render(<TruckContainer />);
  const linkElement = screen.getByText(/SCM Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('TruckContainer renders header', () => {
  render(<TruckContainer />);
  const linkElement = screen.getByText(/Trucks/i);
  expect(linkElement).toBeInTheDocument();
});

test('LocationContainer renders header', () => {
  render(<LocationContainer/>);
  const linkElement = screen.getByText(/Locations/i);
  expect(linkElement).toBeInTheDocument();
});


test('Truck div exists', () => {
  const { getByTestId } = render(<TruckDatagridComponent trucks={trucks}/>);
  const div = getByTestId("truck-data-grid-div1");
  expect(div).toBeInTheDocument();
});

test('Truck header exists', () => {
  const { getByTestId } = render(<TruckDatagridComponent trucks={trucks}/>);
  const header = getByTestId("truck-data-grid-h2-1");
  expect(header).toBeInTheDocument();
});

test('Truck header is "Trucks"', () => {
  const { getByTestId } = render(<TruckDatagridComponent trucks={trucks}/>);
  const header = getByTestId("truck-data-grid-h2-1");
  expect(header.innerHTML).toBe("Trucks");
});

//added cchange because got error "No hosted parallelism has been purchased or granted."
// made the repo private and trying to run pipeline nnow
//truck-data-grid-h2-1

//const datagrid = getByTestId("truck-data-grid-datagrid1");

// configure({ adapter: new Adapter() });
// describe('Container includes TruckDatagrid")', () => {
//   it("There is one datagrid", () => {
//     const wrapper = shallow(<TruckContainer />);
//     expect(wrapper.toBeInTheDocument.toBe(true));
//       //.classList.contains('MuiBox-root')).toBe(true)
//     //expect(wrapper.find("div").length>0).toBe(true);
//   });

  // it("There is min five span-elements", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("span").length > 4).toBe(true);
  // });
//});

