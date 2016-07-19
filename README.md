# Sam Beckham's Blog

Just your standard Jekyll blog.

## Running locally
```
npm install
gem install jekyll scss-lint
npm start
```

## Releasing
We use [Semver](http://semver.org/) here. The easiest way to bump all the
version numbers is by running `npm run patch`, `npm run minor`, or
`npm run major`; depending on the type of release you're running.

## Running on a server
Assuming You have Node, npm and ruby already installed:
There's some weirdness with versions that I need to iron out though.

```
npm install
gem install jekyll scss-lint
npm run build
```

Then point your server to the `web` directory.

![potato](http://i.imgur.com/RQhlcuV.gif)