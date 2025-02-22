# React 19 useEffect Cleanup accessing stale closure
This repository demonstrates a common error in React's `useEffect` hook where the cleanup function attempts to access a state variable that has already been unmounted.  This often results in unexpected behavior or errors, especially when dealing with asynchronous operations or complex component lifecycles.

## The Problem
In the provided `bug.js`, the `useEffect` hook's cleanup function tries to use the `count` state variable. However, by the time the cleanup function is called, the component might have unmounted, causing `count` to be undefined. This leads to an error or unexpected behavior.

## The Solution
The `bugSolution.js` provides a corrected version where the cleanup function avoids accessing the state variable directly.  We store it in a variable which will remain in scope even after the component unmounts.