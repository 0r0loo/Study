import App from "../App.tsx";
import {fireEvent, logRoles, render, screen} from "@testing-library/react";


// describe('App', () => {
//     it('renders headline', () => {
//         render(<App />);
//
//         screen.debug();
//
//         // check if App components renders headline
//     });
// });


test('button has correct initial color', () => {
    render(<App/>)

    // const {container} = render(<App/>)
    // logRoles(container)


    // find an element with a role of button and
    // text of 'Change to blue'
    const colorButton = screen.getByRole('button', {
        name: 'Change to blue'
    })

    // expect the background color to be red
    expect(colorButton).toHaveStyle({background: 'red'})
});


test('button turns blue when clicked', () => {
    render(<App/>);

    const colorButton = screen.getByRole('button', {name: 'Change to blue'})

    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({
        background: 'blue'
    });

    // expect the button text to be 'Change to red'
    expect(colorButton).toHaveTextContent('Change to red')
});
