# Task 1: Text Color Changer

You are required to build a **Text Color Changer** using React.

The application should allow users to:

- Increase a counter value
- Reset the counter value back to zero
- Change the heading text colour based on the counter value

## Functional Requirements

### 1. Count Display

- Display the current count value in the format `Count: 0`
- The count must be shown inside an `<h1>` element with:
  - `data-testid="count-display"`

### 2. Count State

Create a state variable:

```jsx
const [count, setCount] = useState(0);
```

### 3. Increase & Reset Controls

Provide controls to modify the counter:

| Action         | Requirement             |
| -------------- | ----------------------- |
| Increase count | Increase by 1           |
| Reset count    | Set the value back to 0 |

These controls must have the following attributes:

- `data-testid="btn-increase"`
- `data-testid="btn-reset"`

### 4. Colour Change Logic

Use a `useEffect` hook to monitor `count`.

- When `count` reaches **5 or more**, change the `<h1>` text colour to `"red"`
- When `count` is **below 5**, change the text colour back to `"black"`
- Add `count` as the dependency of the `useEffect`

### Colour Rules

- The colour must be applied to the `<h1>` through the inline `style` attribute
- The colour value must be written exactly as `"red"` or `"black"`

## Expected Behaviour

**On initial render:**
- Count: 0
- Text colour: black

**After clicking Increase 5 times:**
- Count: 5
- Text colour: red

**After clicking Reset:**
- Count: 0
- Text colour: black
