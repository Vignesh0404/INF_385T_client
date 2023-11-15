import React, { useState } from 'react';
import { act, render, renderHook, screen, fireEvent, cleanup } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';
import Login from './login';


// const setState = jest.fn();
//const mockSetState = jest.fn();
// jest.mock('react', () => ({
//     useState: initial => [initial, mockSetState]
//   }));
// const useStateSpy = jest.spyOn(React, 'useState')
// useStateSpy.mockImplementation((init) => [init, setState]);
// describe('MyComponent', () => {

//     let component;
//     const mockChange = jest.fn();
//     const mockSubmit = jest.fn();
//     const setState = jest.fn();
//     const useStateSpy = jest.spyOn(React, 'useState');
//     useStateSpy.mockImplementation(init => [init, setState]);
//     beforeEach(() => {
//        component = mount();
//     });
//     afterEach(() => {
//       component.unmount();
//     });
// afterEach(cleanup);

describe("Login render Page", () => {

    it('renders the Login page', () => {
      const {getByText} = render(<Router><Login/></Router>);
      expect(getByText(/login/i)).toBeInTheDocument();
    });
  
    it('render 2 input components', () => {
      const {getByLabelText} = render(<Router><Login/></Router>);
      expect(getByLabelText(/email/i)).toBeInTheDocument();
      expect(getByLabelText(/password/i)).toBeInTheDocument();
    });
  
    it('renders a submit button', () => {
      const {getByText} = render(<Router><Login/></Router>);
      expect(getByText("Submit")).toBeInTheDocument();
    });
});

describe("Input fields", () => {
test("Input field should accept text", () => {
    const { getByLabelText, getByText }  = render(<Router><Login/></Router>);
        const emailInputNode = getByLabelText("Email");

        expect(emailInputNode.value).toMatch("");

        fireEvent.change(emailInputNode, { target: {value: 'obianujuokafor@yahoo.com' }});

        expect(emailInputNode.value).toMatch('obianujuokafor@yahoo.com');

        const passwordInputNode = getByLabelText("Password");

        expect(passwordInputNode.value).toMatch("");

        fireEvent.change(passwordInputNode, { target: {value: 'pass123' }});

        expect(passwordInputNode.value).toMatch('pass123');
});
});

// describe("Button Click", () => {
// test("should be able to submit form", () => {
//     const mockFn = jest.fn();
//         const { getByRole } = render(<Router><Login onSubmit={mockFn}/></Router>); 
//         const buttonNode = getByRole("button");
//         fireEvent.submit(buttonNode); 
//         expect(mockFn).toHaveBeenCalledTimes(1);
//             });
// });

//   describe("Form behaviour",  () => {  
//     it('should submit when form inputs contain text', async () => {
//       const { getByTestId, queryByText } = render(<Router><Login/></Router>);
  
//       await act(async () => {
//         fireEvent.change(screen.getByLabelText(/email/i), {
//           target: {value: 'obianujuokafor@yahoo.com'},
//         });
  
//         fireEvent.change(screen.getByLabelText(/password/i), {
//           target: {value: 'pass123'},
//         })
//       });
  
//       expect(setState).toHaveBeenCalledWith({
//         email: "",
//         password: "",
//   });
    //   await act (async () => {
    //     fireEvent.submit(getByTestId('form'))
    //   });
    // });

    // it('should test what goes into the state', async () => {
    //     const setState = jest.fn();
    //     jest
    //       .spyOn(React, 'useState')
    //       .mockImplementationOnce(initState => [initState, setState]);
        
    //       render(<Router><Login/></Router>);
    //       act(async () => {
    //         fireEvent.change(screen.getByLabelText(/email/i), {
    //           target: {value: 'obianujuokafor@yahoo.com'},
    //         });
      
    //         fireEvent.change(screen.getByLabelText(/password/i), {
    //           target: {value: 'pass123'},
    //         })
    //       });
    //         expect(setState).toHaveBeenCalledWith({
    //         email: "",
    //         password: "",
    //         });
    //   });




// describe('user logs in successfully and token added to localstorage', () => {
//     it('allows the user to login successfully', async () => {
  
//       // mock window.fetch for the test
//       const UserResponse = {token: 'user_token'}
  
//       jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
//         return Promise.resolve({
//           json: () => Promise.resolve(UserResponse),
//         })
//       });
  
//       // Render the Login component
//       const { getByTestId } = render(<Login />);
  
//       // fill out the form
//       await act (async () => {
//         fireEvent.change(screen.getByLabelText(/username/i), {
//           target: {value: 'shaquille'},
//         });
  
//         fireEvent.change(screen.getByLabelText(/password/i), {
//           target: {value: 'oatmeal'},
//         })
//       });
  
//       //Submit the form
//       await act (async () => {
//         fireEvent.submit(getByTestId('form'))
//       });
  
//       // alert to show up before continuing with our assertions.
//       // Expect alert to be success
//       const alert = await screen.findByRole('alert');
//       expect(alert).toHaveTextContent(/congrats/i)
  
//       // Expect local token to be set
//       expect(window.localStorage.getItem('token')).toEqual(UserResponse.token)
//     })
//   });







// import React from "react";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Login from "./Login";

// it("submits username and password", () => {
//   const username = "me";
//   const password = "please";
//   const onSubmit = jest.fn();
//   render(<Login onSubmit={onSubmit} />);

//   userEvent.type(screen.getByLabelText(/username/i), username);

//   userEvent.type(screen.getByLabelText(/password/i), password);

//   userEvent.click(screen.getByText(/log in/i));

//   expect(onSubmit).toHaveBeenCalledTimes(1);
//   expect(onSubmit).toHaveBeenCalledWith({
//     username,
//     password
//   });
// });



// import React from "react";
// import { shallow } from 'enzyme';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Login from "./login";


// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, "useState");
// useStateSpy.mockImplementation((initialState) => [initialState, setState]);
// const wrapper = shallow(<Login />);
// console.log(wrapper);
// //wrapper.debug() ;

// it("should update state on input change", () => {
//     const newInputValue = "React is Awesome";
//     wrapper.find('.form-control').simulate("change", { target: { value: newInputValue } });
//     expect(setState).toHaveBeenCalledWith(newInputValue);
//   });