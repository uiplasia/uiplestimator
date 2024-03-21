# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Style css for center and put label above input field: 
style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}





### Deployment on github: ###

To push your React project to GitHub and make it a private repository, follow these steps:

1. **Initialize Git:** If you haven't already, initialize Git in your project directory by running the following command in the VS Code terminal:

   ```bash
   git init
   ```

2. **Add Remote Repository:** Add your GitHub repository as the remote origin. Replace `<repository-url>` with your GitHub repository URL:

   ```bash
   git remote add origin <repository-url>
   ```

3. **Add and Commit Changes:** Add your files to the staging area and commit them:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. **Push to GitHub:** Push your commits to the GitHub repository:

   ```bash
   git push -u origin master
   ```

5. **Make the Repository Private:**
   - Go to your GitHub repository page.
   - Click on "Settings" in the right sidebar.
   - In the "Danger Zone" section, click on "Change visibility".
   - Select "Private" and confirm.

6. **Deploy as Private:**
   - To deploy your React app, you can use a hosting service like Netlify or Vercel.
   - During the deployment process, you can set the visibility of your deployed app to private. This setting is typically found in the deployment configuration of the hosting service.

7. **Restrict Sharing:**
   - After deploying your app, you can restrict sharing by configuring the permissions of your GitHub repository.
   - Go to your GitHub repository page.
   - Click on "Settings" in the right sidebar.
   - In the "Manage access" section, click on "Invite a collaborator".
   - Enter the GitHub usernames or email addresses of the specific people you want to share the repository with.
   - Choose the appropriate permission level (e.g., read access) for each collaborator.

After completing these steps, your React app should be successfully pushed to a private GitHub repository and deployed as a private app, with sharing restricted to specific people only.