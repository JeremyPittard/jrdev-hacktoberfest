## Welcome To JuniorDev Perth does Hacktoberfest 2019

the purpose of this repo is to allow junior devs (or anyone really) to wrap their head around the process of git/pull requests/contributing to open source
without worrying about everything else that might be going on.

### Steps

1. make a fork of this repo (just a good habit so you don't accidentally break anything else in the project)
2. clone the repo locally
3. npm i
4. once everything is installed you can hit npm run dev and it will spin up a server, play around - explore, take a dig at what is going on, what I have created is fairly simple, all the complex stuff is thanks to the guys at 11ty
5. when your ready create a branch to add your card in. (git checkout -b "attendee/your-name") or if you would like to improve on the fairly blank state please but in a dev directory (dev/what-your-doing) just to keep track I have not set up any auto merging yet.
6. make a copy of base.md located in src/collections/attendees, if you aren't familiar with markdown don't worry that's not the point of this exercise. I have populated the file with some front matter (the stuff between the "---") all you need to do is replace the strings and give the file the appropriate name.
7. Add your name to the "name:" variable string, a url to a photo or image of yourself or anything really (please just make it a square image, I havent got any crop processing running yet) and a url to a link that you would like your card to link to (linkedin, bookface, personal site) double check your urls have https or http or they will be treated as internal links when 11ty puts the site together on build
8. when you have got that done follow this instructions here[ https://help.github.com/en/articles/creating-a-pull-request-from-a-fork](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) (or ask one of the wandering mentors) to do a pull request to the main repo from your forked repo
9. 11ty and netlify do their magic and site is deployed with your card!\
   \
   ###note if you are running on gitbash or on a mac, in the package.json please change the clean step, will need to be "rm -rf" instead of "del"

### this site is made using 11ty static site generator and netlify for deployments any questions on the day about either of these myself and a few of our other mentors will be able to help also.

\
\
\

## This is the original readme for the base project below, I've made some tweaks but nothing major, folder structure to taste and added purgecss to get rid of all that bloat that comes with stuff like bootstrap grid if you are really only using one column width.

\

### this is based on Deventy (all details below)

-   I have just tweaked it a bit for my liking
-   added purgecss cli tool (trying to avoid running a heap of things through webpack)
-   changed from nunjucks to liquid

# Deventy

A minimal 11ty starting point for building static websites with modern tools. Uses the CLI of each tool. Allowing a much easier upgrade path for each individual development tool.

Features:

-   [11ty](https://www.11ty.io/)
-   [Sass/SCSS](https://github.com/sass/node-sass)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [light-server](https://github.com/txchen/light-server)
-   [PostCSS](https://postcss.org/)
-   [CSSnano](https://cssnano.co/)
-   [Autoprefixer](https://github.com/postcss/autoprefixer)
-   [PurgeCss](https://www.purgecss.com/)

## Getting Started

Install all dependencies using npm:

```
$ nvm use
$ npm install
```

### To Develop

```
$ npm run dev
```

And in debug mode:

```
$ npm run dev:debug
```

You can view the website at the given access URL:

```
$ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

### To Build

```
npm run build
```
