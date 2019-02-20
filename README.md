# Budgo

Budgo is a simple budgeting app. It asks for an amount of money to budget over a period of time, and every day gives you a random small amount of money to spend. You can keep track of your transactions through spending, and bank any money from one day to add to another.

## Getting Started

With npm and ionic installed, clone the repository, and run these two commands.

```
npm install

ionic serve --lab
```

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* **Lucas Alexander** - *Design and coding* - [eyeseesun](https://github.com/eyeseesun)

## What I learned

- Design is super rewarding and I'd love to do it more in future projects.
- Communication in Angular requires a bit of planning.
**A year later**
- I'm writing this awhile after I originally created Budgo. My code is quite thick and unreadable in places. If I were to do this again, I'd get the daily budget algorithm planned out and refine and refine and refine until I'm hitting at least 14 - 16 LOC for those heavy functions. Being concise is important, a function more than 12 lines is not that, but this was a learning project, so I'll try not to be too hard on myself.
- Another thing I learned after the fact, clean your app.module.ts. This app tried to use GSAP, but for some reason couldn't get it to work and I never took out the dependency.
- I love the file structure though. This is something Ionic 4 is moving away from, looking at angulars file structure. I don't like my services hanging out with my app module and component, just floating around in src.

## What was used
- **Ionic**
- **Angular**
- **Font Awesome**
- **Photoshop** (For design)

## Where I'd go with it

- Redesign the banking section to fit with the rest of the app.
- A little tutorial in a new options section
- Upgrade to moment.js as there's some issues with when your new budget comes into existance based on time.
- Something I'd like to learn is testing with jasmine and karma under ionic. I kind of know both, but have always had trouble starting it up. I hate running tests on new projects and jasmine can't find the specs, so annoying to debug. Debugging your testing framework because it's been improperly set up, or your the one that improperly set it up is no fun.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The Ionic team, for helping me extend my knowledge of Angular, however limited it may be.

## Thanks!

I made an app! It's not very clean, and a bit chunky in places, but she's mine and I love her! Thank you very much for checking out the source code, and here's to my future projects being a bit prettier!
