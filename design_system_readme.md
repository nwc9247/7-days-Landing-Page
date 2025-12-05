# Clean, Modern Landing Page Design System

Absolutely Milan — here is your **clean, modern, beginner-friendly design system** that feels like something a real startup would use.
You’ll reuse this across all 7 days, so your final landing page feels consistent and professional.

Everything is easy to implement in plain HTML/CSS, and 100% React-ready.

---

# 🎨 **🌟 Full Design System (Colors, Typography, Spacing, Components)**

---

# **1️⃣ Color Palette**

### **Primary Colors**

| Purpose       | Color     | Usage                                    |
| ------------- | --------- | ---------------------------------------- |
| Primary       | `#6C5CE7` | Buttons, main highlight, links, headings |
| Primary Light | `#A29BFE` | Hover states, secondary highlights       |

### **Neutral Colors**

| Purpose     | Color     | Usage                |
| ----------- | --------- | -------------------- |
| Dark        | `#2D3436` | Text                 |
| Gray        | `#636E72` | Subtext, labels      |
| Border Gray | `#Dfe6e9` | Cards, input borders |
| Light BG    | `#F9FAFB` | Section backgrounds  |
| Pure White  | `#FFFFFF` | Cards, main blocks   |

### **Accent Colors**

| Purpose | Color     |
| ------- | --------- |
| Success | `#00b894` |
| Warning | `#fdcb6e` |
| Danger  | `#d63031` |

---

# **2️⃣ Typography System**

## **Font Family**

```
font-family: "Inter", system-ui, sans-serif;
```

If Inter isn’t installed, system font kicks in (React-friendly).

---

## **Font Scale**

### **Headings**

| Element | Size | Weight |
| ------- | ---- | ------ |
| H1      | 48px | 700    |
| H2      | 36px | 700    |
| H3      | 28px | 600    |
| H4      | 22px | 600    |

### **Body Text**

| Type             | Size | Weight  |
| ---------------- | ---- | ------- |
| Body / Paragraph | 18px | 400–500 |
| Small text       | 14px | 400     |

### **Line Height**

```
line-height: 1.5
```

---

# **3️⃣ Spacing System**

| Token        | Pixels | Use Case                           |
| ------------ | ------ | ---------------------------------- |
| `--space-xs` | 8px    | Tight elements (icons, badges)     |
| `--space-sm` | 12px   | Small gaps                         |
| `--space-md` | 20px   | Body spacing, padding inside cards |
| `--space-lg` | 32px   | Section content                    |
| `--space-xl` | 48px   | Hero section, large blocks         |

---

# **4️⃣ Border Radius System**

| Token  | Value |
| ------ | ----- |
| Small  | 6px   |
| Medium | 10px  |
| Large  | 18px  |

Use “Large” for cards to feel modern.

---

# **5️⃣ Shadow System**

```
--shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 28px rgba(0, 0, 0, 0.15);
```

---

# **6️⃣ Layout System (Max Widths)**

| Element      | Width                        |
| ------------ | ---------------------------- |
| Container    | 1200px max                   |
| Text Content | 700px max                    |
| Cards        | Flexible grid (minmax 250px) |

```css
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
```

---

# **7️⃣ Component Library (Basic Styles)**

## 🔘 **Button Styles**

### **Primary Button**

```css
.btn-primary {
  background: #6C5CE7;
  color: white;
  padding: 14px 26px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn-primary:hover {
  background: #A29BFE;
  transform: translateY(-2px);
}
```

## 📦 **Card Style**

```css
.card {
  background: white;
  padding: 32px;
  border-radius: 18px;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

## 📌 **Input Style**

```css
.input-field {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #Dfe6e9;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease;
}

.input-field:focus {
  border-color: #6C5CE7;
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
}
```

---

# **8️⃣ Sections Layout (Global Rhythm)**

```css
section {
  padding: 80px 0;
}
```

---

# **9️⃣ Breakpoints**

```css
@media (max-width: 1024px) {}
@media (max-width: 768px) {}
@media (max-width: 480px) {}
```

---

# 🌈 **10️⃣ Ready-to-Use CSS Variables Setup**

```css
:root {
  --primary: #6C5CE7;
  --primary-light: #A29BFE;

  --dark: #2D3436;
  --gray: #636E72;
  --border-gray: #Dfe6e9;
  --light-bg: #F9FAFB;
  --white: #FFFFFF;

  --success: #00b894;
  --warning: #fdcb6e;
  --danger: #d63031;

  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 20px;
  --space-lg: 32px;
  --space-xl: 48px;

  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 28px rgba(0, 0, 0, 0.15);
}
```

---

# 🎉 You now have your **Official Landing Page Design System!**

This gives you:

✔ Consistent colors  
✔ Scalable typography  
✔ Clean spacing  
✔ Reusable components  
✔ Modern UI foundation  
✔ React-friendly thinking