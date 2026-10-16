# Task 4: Cricket Scoreboard

You are building a **Cricket Scoreboard** using React.

The scoreboard tracks the runs scored and wickets fallen in an innings. Users can add runs in increments of 1, 4 or 6, record a wicket, and reset the scoreboard. Once ten wickets have fallen, the innings ends and no further scoring is allowed.

Complete the given template code by implementing the scoreboard.

## Functional Requirements

### 1. State Variables

- `runs` - a number storing the total runs, with an initial value of `0`
- `wickets` - a number storing the wickets fallen, with an initial value of `0`

### 2. Score Display

- Display the score inside an `<h2>` element in the format `runs/wickets`
  - Example: `24/3`
- The `<h2>` must have the attribute:
  `data-testid="score-display"`

### 3. Buttons for Interaction

| Button | Action                               | Attribute                  |
| ------ | ------------------------------------ | -------------------------- |
| Add 1  | Increases runs by 1                  | `data-testid="btn-add-1"`  |
| Add 4  | Increases runs by 4                  | `data-testid="btn-add-4"`  |
| Add 6  | Increases runs by 6                  | `data-testid="btn-add-6"`  |
| Wicket | Increases wickets by 1               | `data-testid="btn-wicket"` |
| Reset  | Sets both runs and wickets back to 0 | `data-testid="btn-reset"`  |

### 4. All Out Condition

- When `wickets` reaches **10**, display a `<p>` element containing the text `All Out!`
- The `<p>` must have the attribute:
  `data-testid="all-out-message"`
- The message must **not** be rendered when `wickets` is less than 10
- When all out, the **Add 1**, **Add 4**, **Add 6** and **Wicket** buttons must be disabled
- The **Reset** button must remain enabled at all times

## Example Flow

| Step                      | Display                        |
| ------------------------- | ------------------------------ |
| Initial render            | `0/0`                          |
| Click Add 4               | `4/0`                          |
| Click Add 6               | `10/0`                         |
| Click Wicket              | `10/1`                         |
| Click Wicket 9 more times | `10/10` with All Out! shown    |
| Click Reset               | `0/0` with the message removed |
