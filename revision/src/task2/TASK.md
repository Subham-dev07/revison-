# Task 2: Font Size Changer

You are required to build a **Font Size Changer** using React.

The application should allow users to:

- Increase a counter value
- Reset the counter value back to zero
- Change the heading font size based on the counter value

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

### 4. Font Size Change Logic

Use a `useEffect` hook to monitor `count`.

- When `count` reaches **3 or more**, change the `<h1>` font size to `"40px"`
- When `count` is **below 3**, change the font size back to `"24px"`
- Add `count` as the dependency of the `useEffect`

### Font Size Rules

- The font size must be applied to the `<h1>` through the inline `style` attribute
- The value must be written exactly as `"40px"` or `"24px"` — other units are not accepted

## Expected Behaviour

**On initial render:**
- Count: 0
- Font size: 24px

**After clicking Increase 3 times:**
- Count: 3
- Font size: 40px

**After clicking Reset:**
- Count: 0
- Font size: 24px
