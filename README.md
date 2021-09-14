# next-js-finder

Create a macOS Finder like app using Next.js.

This project is mainly for learning purpose, it is not suitable for production.



## References

- https://github.com/fastify/fastify-nextjs
- https://nextjs.org/learn/basics/data-fetching/request-time


## Notes


### Next.js auto changed my `tsconfig.json` file

```
We detected TypeScript in your project and reconfigured your tsconfig.json file for you. Strict-mode is set to false by default.

The following suggested values were added to your tsconfig.json. These values can be changed to fit your project's needs:

    - allowJs was set to true
    - skipLibCheck was set to true
    - noEmit was set to true

The following mandatory changes were made to your tsconfig.json:

    - esModuleInterop was set to true (requirement for babel)
    - moduleResolution was set to node (to match webpack resolution)
    - resolveJsonModule was set to true (to match webpack resolution)
    - isolatedModules was set to true (requirement for babel)
    - jsx was set to preserve (next.js implements its own optimized jsx transform)
```


### There is no point for server side rendering if 

- You don't care about SEO: traditional SPA app + Rest API is just fine.
- Your website is purely static: then just pre-generate everything at build time.
