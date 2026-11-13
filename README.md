# 🍔 FastBites – Food Ordering Application

FastBites is a React-based food ordering application that allows users to explore restaurants, search for their favorite food outlets, discover restaurant menus, and manage their shopping cart.

The project focuses on building a modern, component-based frontend using React, React Router, Redux Toolkit, and Tailwind CSS.

🔗 **Live Demo:** https://fast-bites-three.vercel.app/

## ✨ Features

- **Restaurant Discovery:** Browse restaurants fetched from an external JSON API.
- **Search Functionality:** Search restaurants by name with autocomplete suggestions.
- **Restaurant Filters:** Filter restaurants by cuisine, rating, and delivery time.
- **Dynamic Restaurant Menus:** View restaurant-specific menus using dynamic routing.
- **Shopping Cart:** Add items, increase or decrease quantities, and remove items.
- **Persistent Cart:** Cart information is stored in localStorage and restored after refreshing the page.
- **Shimmer UI:** Display loading placeholders while restaurant data is being fetched.
- **Infinite Scrolling:** Load additional restaurant cards as users scroll.
- **Reusable Components:** Organize the application into modular and reusable React components.
- **Routing:** Navigate between Home, Contact, Cart, and Restaurant Menu pages.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM

### State Management
- Redux Toolkit
- React Hooks (useState, useEffect, useRef)
- React Context API

### Tools and Deployment
- Parcel
- Git & GitHub
- Vercel
- Cloudinary

### Data Source
- External JSON APIs hosted through GitHub Pages

## 📂 Project Structure

```text
Fast-Bites/
│
├── src/
│   ├── components/
│   ├── utils/
│   ├── appStore.js
│   ├── App.js
│   ├── main.js
│   └── style.css
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── vercel.json
└── README.md
```

*The structure above is a simplified overview; your actual component and utility files may be organized differently.*

## 🚀 Getting Started

Follow these steps to run FastBites locally.

### 1. Clone the repository

```bash
git clone https://github.com/pranavpunnithan/Fast-Bites.git
```

### 2. Navigate to the project directory

```bash
cd Fast-Bites
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will be available at:

```text
http://localhost:1234
```

### 5. Create a production build

```bash
npm run build
```

The production build will be generated inside the `dist` directory.

## 🧠 Key Learning Outcomes

Through this project, I practiced:

- Building reusable React components.
- Managing component state and side effects.
- Implementing controlled components and search functionality.
- Working with external APIs using Fetch.
- Managing global state using Redux Toolkit.
- Implementing dynamic routing and nested routes.
- Creating custom hooks and reusable logic.
- Implementing lazy loading and Suspense.
- Persisting application data using localStorage.
- Building loading states and infinite scrolling.
- Organizing frontend code into modular components.
- Deploying a React application using Vercel.



## 👨‍💻 Author

**Pranav P **

GitHub: https://github.com/pranavpunnithan

---
