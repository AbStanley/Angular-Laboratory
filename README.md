# 🌟 Angular Laboratory | Signals – Reactive State Management

This is a laboratory mastering the new **Signals API** in Angular. Covering all the concepts to understand deeper and build fast, reactive, and maintainable applications using Signals for state management and change detection.

---

## 📁 Structure

Each concept corresponds to a folder inside `src/app`, named numerically (`00`, `01`, `02`, etc.) for clarity and sequential details. You can explore each example independently or follow the suggested order.

|  #  | Lesson Description                                                       |            Code Path             |
| :-: | ------------------------------------------------------------------------ | :------------------------------: |
| 00  | [Intro to Change Detection](src/app/00-change-detection/README.md)       |  `src/app/00-change-detection`   |
| 01  | [Writable & Readonly Signals](src/app/01-counter-signal/README.md)       |   `src/app/01-counter-signal`    |
| 02  | [Computed Signals](src/app/02-counter-computed/README.md)                |  `src/app/02-counter-computed`   |
| 03  | [Effects and Side Effects](src/app/03-counter-effect/README.md)          |   `src/app/03-counter-effect`    |
| 04  | [LinkedSignal API](src/app/04-linked-signal/README.md)                   |    `src/app/04-linked-signal`    |
| 05  | [Input/Output with Signals](src/app/05-input-output-signal/README.md)    | `src/app/05-input-output-signal` |
| 06  | [Two-Way Binding with Signals](src/app/06-double-data-binding/README.md) | `src/app/06-double-data-binding` |
| 07  | [Querying Components with Signals](src/app/07-queries-signal/README.md)  |   `src/app/07-queries-signal`    |
| 08  | [Router Integration](src/app/08-router/README.md)                        |       `src/app/08-router`        |
| 09  | [Async Patterns and Fetching Data](src/app/09-async/README.md)           |        `src/app/09-async`        |
| 10  | [RxJS Interop](src/app/10-rxjs-interop/README.md)                        |    `src/app/10-rxjs-interop`     |
| 11  | [Signal Forms](src/app/11-forms/README.md)                               |    `src/app/11-signal-forms`     |

---

## 🛠️ Getting Started

Follow these steps to run the course locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/.....

# 2. Navigate to the project folder
cd angular-laboratory

# 3. Install dependencies
npm install

# 4. Start the development server
ng serve

5. Open your browser and navigate to `http://localhost:4200`.
```

## 💡 Tips

- You can jump to any concept directly via the browser URL or app navigation.
- Each folder contains a `README.md` with explanations and live code.

---

## 🔍 Comparative Overview of Angular Signal Primitives

To deepen your understanding of Angular's reactive primitives, there is a detailed comparative guide covering the core Signals API and experimental extensions. This repo explains their reactivity granularity, mutation capabilities, execution timing, typical use cases, and maturity status.

This comprehensive comparison and technical explanations in the markdown file:

📄 [Angular Signal Primitives Comparative Guide](comparative-primitives.md)

This can help to choose the right primitive for the specific state management needs and leverage Angular's full reactive power.
