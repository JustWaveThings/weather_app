# Working with APIs - Practice

<https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis>

What a fun exercise! I have wanted to be able to use external API's for years.

I had to restrain myself from going hog-wild on this assignment! I wanted to do so many different things with this! I have to say I am very happy that the `Fetch API` and `Promises` are a thing. It's hard to explain the feeling I have but I feel more powerful than I was two days ago. I can programatically get data and show data from third parties. I am very excited to explore APIs and refine my understanding of APIs and async programming in general.

Project meets assignment requirements. Changes / Challenges:

- I utilized Webpack for the project.
  - Did not take full advantage of the ES6 modules. If I were to build this out more, that would be a part of the refactoring for sure.
- On user search, I requested 25 gifs from from the Giphy API `search` endpoint, looped through the returned object to extract the title and url, and pushed that to an array that we iterate on user button click.
  - To make this more performant, I would want to lazy-load or somehow load those assets in the background. As it is now, they load when they are rendered, so some lag is visible depending on file size.
- I **THINK** I secured my Giphy API Key. I used the dotenv-webpack plugin with a .env file in the root of the project with the key. I made sure the .env file was in my .gitignore. I also added that environment variable to GitHub pages, so hopefully the project will work when published there. I know I jumped forward to that in the curriculum, but I made that choice for me.
- There are a few small bugs in the code, but the fetch and promise code is correct to my knowledge.

As always, thanks for taking a look at my projects, and any feedback (particularly low hanging fruit) is always appreciated.
