# Development Notes

## Assumptions

This is a simple project that works well with React. Initial research shows that `countapi-js` is a supported library for the countapi.xyz site. Since the key is not private I chose simple client side model. If it were I'd choose a static/server builder framework like NextJS to keep secrets server side.

Based on the initial requirements, this app is a single prominent button. Nothing in the requirements say that the current number of hits should be displayed prior to the button being clicked, so all queries against countapi.xyz happen as a button click event. On initial load the button is pre-filled with "Click to see count" text.

CSS for the button is liberally borrowed from the agency homepage.

## Implementation Details

I've code named this project egg-trait within the repository but the components follow the naming scheme of the requirements.

## Components

- Component `PurpleCowButton` takes parameter `countapiKey` so that each instance can either maintain its own count or share.

## Future Improvements

- Shift CSS from App.css into component-specific code file for PurpleCowButton
- If expanding the component, change aspects such as default text or starting counts to its param list so they can be easily overriddden
- Add additional failure cases (either visible or behind the scenes) for when the countapi.xyz service is unavailable

# Building and Running the Solution

## For Development

This project was built with Node v14.15.3 and npm 6.14.9.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run `npm start` to run in development mode.

Run `npm run build` to build in the `build` folder.

## For Production

To build using the included `Dockerfile` use:

	docker build -t egg-trait:prod .

To execute, use:

	docker run --rm -p 3000:80 egg-trait:prod

Substitute your own port number for `3000` value above to use a different number.
