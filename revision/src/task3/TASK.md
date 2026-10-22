# Task 3: Temperature Converter

You are building a **Temperature Converter** using React.

The converter displays a temperature value along with its unit. Users can raise or lower the temperature by two degrees, and convert the displayed value between Celsius and Fahrenheit.

Complete the given template code by implementing the converter.

## Functional Requirements

### 1. State Variables

- `temperature` - a number storing the current temperature value, with an initial value of `30`
- `unit` - a string storing the current unit, with an initial value of `"C"`

### 2. Conversion Function

Implement a function named `convertTemperature()`.

- When `unit` is `"C"`, convert the temperature to Fahrenheit using:
  `F = (C × (9 / 5)) + 32`
- When `unit` is `"F"`, convert the temperature to Celsius using:
  `C = (F − 32) × (5 / 9)`
- The function must update both the `temperature` and the `unit` state values

### 3. Temperature Display

- Display the temperature value formatted to 2 decimal places using `.toFixed(2)`
- Display the unit symbol inside a `<span>` element, as `°C` or `°F`
- The element holding the temperature value must have the attribute:
  `data-testid="temp-value"`
- The `<span>` holding the unit symbol must have the attribute:
  `data-testid="temp-unit"`

### 4. Buttons for Interaction

| Button label                                   | Action                       | Attribute                    |
| ---------------------------------------------- | ---------------------------- | ---------------------------- |
| Increase                                       | Increases temperature by 2   | `data-testid="btn-increase"` |
| Decrease                                       | Decreases temperature by 2   | `data-testid="btn-decrease"` |
| Convert to Fahrenheit / Convert to Celsius     | Calls `convertTemperature()` | `data-testid="btn-convert"`  |

### 5. Convert Button Label

- The convert button label must name the unit the temperature will be converted to
- When `unit` is `"C"`, the label reads **Convert to Fahrenheit**
- When `unit` is `"F"`, the label reads **Convert to Celsius**
- The label must update as soon as the unit changes

## Conversion Rules

- The Increase and Decrease buttons add or subtract 2 from the value as currently displayed — they do not convert
- The displayed value and unit symbol must both update immediately after a conversion
- The value is rounded for display only; the `temperature` state keeps the full unrounded value
