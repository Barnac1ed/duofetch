# duofetch
a little project i'm working on written in **typescript**

use: shows the duolingo statistics of the specified user, very lightweight and fast

**packages (without ts):**
- [xhr-request](https://npmjs.org/package/xhr-request)
- [minimist](https://npmjs.org/package/minimist)

**packages (with ts):**
- [xhr-request](https://npmjs.org/package/xhr-request)
- [minimist](https://npmjs.org/package/minimist)
- [@types/express](https://npmjs.org/package/@types/express)
- [@types/node](https://npmjs.org/package/@types/node)
- [typescript](https://npmjs.org/package/typescript)

**used services:**
- [duolingo](https://duolingo.com)
- [allorigins](https://allorigins.win/)

**inspired by:**
- [neofetch (linux cli app)](https://github.com/dylanaraps/neofetch)
- [@grimille/duolingo-js (npm package)](https://npmjs.org/package/@grimille/duolingo-js)

## instructions
**building (.ts -> .js)**
1) run `npm run build`
2) the output will be in dist/

***note:** the code will not be optimized/minified*

**running**
1) run `node . --username="<duolingo_username>"`

***note:** i have not come up with a way to run the program normaly (eg. just inputing duofetch into console), so this is the best i have so far*

## credit
if you steal my work you are not a chad

thanks to all the people that made the software i took inspr from that i mentioned at the top

special thanks to me for making this entire thing. i spent like 4 hours in total trying to fix a simple bug i didn't even realise existed