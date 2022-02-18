This repository is the result of a run-through of the [React Testing Library tutorial](https://www.robinwieruch.de/react-testing-library/) 
by Robin Wieruch.

The `ts` branch uses TypeScript, the `js` branch uses JavaScript.

I was a bit inconsistent on whether I kept existing tests or deleted them, but a commit-by-commit walkthrough should map 
reasonably well to the steps in the tutorial.

While working on it, I run into an issue around the use of Regular Expressions. The tutorial tells us:

> The getByText function accepts a string as input, as we are using it right now, but also a regular expression. 
> Whereas a string argument is used for the exact match, 
> a regular expression can be used for a partial match which is often more convenient...

Yet when I ran that test, the `getByText` method doesn't quite work as described when passed a regular expression.
The expression finds multiple items (as would be expected, given the page's code), so search actually fails. 
See the third test, commented out, in commit e157fb06e35bb408.
This happens much the same in TypeScript. See commit 2af6d030aa63d4b2.
