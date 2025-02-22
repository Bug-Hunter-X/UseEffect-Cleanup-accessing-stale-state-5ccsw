```javascript
// In a React component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect use of `count` in the cleanup function
    return () => {
      console.log('cleanup',count); // Error: 'count' is undefined
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```