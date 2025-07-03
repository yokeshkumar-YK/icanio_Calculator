# 🧮 Styled Grid Calculator

A sleek, responsive calculator crafted with HTML, CSS — perfect for learning frontend basics or embedding in your projects.

---

## ✨ Features

- 🔢 Numeric input (0–9, `00`, decimal point)  
- ➕➖➗✖️ Core arithmetic operations  
- 🔄 **C**: Clear screen  
- ⏪ **CE**: Backspace  
- ✅ **=**: Calculate with JavaScript's `eval()`  
- 📱 Responsive layout using CSS  
- 🎨 Customizable styles via `.btn`, `.red`, `.blue`, `.display`, `.grid`, etc.

---

## 🧠 How It Works

1. **HTML**  
   - `<form name="clc">` enables using `clc.display` in JS  
   - A `<input type="text" readonly>` serves as the display

2. **Buttons**  
   - `<input type="button">` triggers inline JS (`onclick`) to update the display string

3. **JavaScript Actions**  
   - Append digits/operators to `clc.display.value`  
   - `C`: Clears → `clc.display.value = ''`  
   - `CE`: Backspaces → `.slice(0, -1)`  
   - `=`: Evaluates → `eval()` (simple, but **not** secure for production)

4. **CSS Styling**  
   - `.container`, `.grid` manage layout  
   - `.btn`, `.red`, `.blue.equal` style buttons  
   - `.display` styled for visibility and readability

---

## ⚠️ Security Note

This project uses `eval()` for convenience. In serious applications, **avoid** `eval()` due to security vulnerabilities. Consider using a dedicated parsing library or expression evaluator.

---

## 🛠️ Ideas for Enhancement

- Move JS into a separate script instead of inline  
- Add features: parentheses, `%`, exponentiation  
- Enable keyboard input and improve accessibility  
- Replace `eval()` with a safer evaluation library  
- Boost UX with animations (hover, click, transitions)

---
