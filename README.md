# linkinbio

### How to run
1. Clone the repository into a given folder. 
2. Change directory into /linkinbio
3. run command `npm install` to install all required npm packages
4. Head to src/components/PostData.js
5. Add your posts in order from newest at the top to oldest at the bottom.
6. Format as shown below 

`
{
        alt: "Example alt text, // Alt text 
        link:"www.LinkToPost.com", // Insert link
        image:"https://www.linktoimage.com", // Insert Image URL
        key: 0 // increase keys as number of posts increase
},
`

7. Now that changes have been made, run the command `npm run deploy`
8. Head to the repository settings/Pages, and enable GitHub Pages under the gh-pages branch
9. Wait a few minutes then check the link to see if the site has been updated. 
