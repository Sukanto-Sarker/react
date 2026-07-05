# 📘 React Router Complete Roadmap (বাংলায়)

যদি তুমি **React Router** সত্যিই ভালোভাবে শিখতে চাও, তাহলে শুধু `Routes` এবং `Route` মুখস্থ করলে হবে না। React Router-এর প্রতিটি কনসেপ্ট বুঝতে হবে।

নিচে Beginner → Advanced পর্যন্ত একটি সম্পূর্ণ Roadmap দেওয়া হলো।

---

# 📚 Chapter 1: React Router কী?

**React Router** হলো React Application-এর বিভিন্ন Page-এর মধ্যে Navigation করার একটি Library।

ধরো একটি Website আছে।

- Home
- About
- Contact
- Products
- Login
- Dashboard

### React Router ছাড়া

```
example.com/home.html
example.com/about.html
```

### React Router ব্যবহার করলে

```
localhost:5173/
localhost:5173/about
localhost:5173/contact
localhost:5173/products
```

কিন্তু আসলে পুরো Website Reload হয় না।

React শুধু Component পরিবর্তন করে।

এটাকেই বলে **Single Page Application (SPA)**।

---

# 📚 Chapter 2: Install React Router

```bash
npm install react-router-dom
```

---

# 📚 Chapter 3: BrowserRouter

এটাই Router-এর Main Wrapper।

```
<App />

↓

<BrowserRouter>

↓

সব Route

</BrowserRouter>
```

### Example

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    </BrowserRouter>
  );
}
```

---

# 📚 Chapter 4: Routes

`Routes` হচ্ছে Route Container।

```jsx
<Routes>

</Routes>
```

এর ভিতরে সব Route থাকবে।

---

# 📚 Chapter 5: Route

একটা URL-এর জন্য কোন Component দেখাবে সেটা `Route` বলে।

### Example

```jsx
<Route path="/" element={<Home />} />
```

মানে

```
localhost:5173/

↓

Home Component
```

আরেকটি

```jsx
<Route path="/about" element={<About />} />
```

```
localhost:5173/about

↓

About Component
```

---

# 📚 Chapter 6: Multiple Routes

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

# 📚 Chapter 7: Link

React-এ কখনো

```html
<a href="">
```

ব্যবহার করা উচিত না।

কারণ পুরো Page Reload হবে।

React-এ ব্যবহার করি

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

---

# 📚 Chapter 8: NavLink

`Link`-এর Advanced Version।

Current Page Active থাকলে Class যোগ করে।

### Example

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "text-red-500 font-bold" : ""
  }
>
  About
</NavLink>
```

---

# 📚 Chapter 9: useNavigate()

Programmatically অন্য Page-এ যাওয়ার Hook।

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/dashboard");
```

### Back

```jsx
navigate(-1);
```

### Forward

```jsx
navigate(1);
```

### Replace

```jsx
navigate("/home", {
  replace: true,
});
```

---

# 📚 Chapter 10: Dynamic Route

ধরো Products আছে।

```
Product 1
Product 2
Product 3
```

URL

```
/products/1
/products/2
/products/3
```

Route

```jsx
<Route
  path="/products/:id"
  element={<ProductDetails />}
/>
```

---

# 📚 Chapter 11: useParams()

Dynamic ID পাওয়ার Hook।

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

URL

```
/products/20
```

Output

```
20
```

---

# 📚 Chapter 12: Nested Route

Dashboard Structure

```
Dashboard
│
├── Profile
├── Orders
└── Settings
```

### Route

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="orders" element={<Orders />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

---

# 📚 Chapter 13: Outlet

Dashboard Component

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <Outlet />
    </>
  );
}
```

`Outlet` হচ্ছে যেখানে Child Route Render হবে।

---

# 📚 Chapter 14: Layout Route

বারবার Navbar এবং Footer লিখার দরকার নেই।

Layout Component

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
```

---

# 📚 Chapter 15: 404 Page

```jsx
<Route
  path="*"
  element={<NotFound />}
/>
```

যেকোনো ভুল URL গেলে 404 Page দেখাবে।

---

# 📚 Chapter 16: useLocation()

বর্তমান URL জানার Hook।

```jsx
import { useLocation } from "react-router-dom";

const location = useLocation();

console.log(location.pathname);
```

Output

```
/about
```

---

# 📚 Chapter 17: Search Params

URL

```
/products?category=bag
```

Read Query Parameter

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();

searchParams.get("category");
```

Output

```
bag
```

---

# 📚 Chapter 18: Protected Route

Login না থাকলে Dashboard-এ যেতে দেবে না।

```jsx
if (!user) {
  return <Navigate to="/login" />;
}
```

---

# 📚 Chapter 19: Navigate Component

Redirect করার Component।

```jsx
<Navigate to="/login" />
```

---

# 📚 Chapter 20: Lazy Loading

বড় Project-এ Page Lazy Load করা হয়।

```jsx
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
```

---

# 📚 Chapter 21: Suspense

```jsx
import { Suspense } from "react";

<Suspense fallback={<Loading />}>
  <Home />
</Suspense>
```

---

# 🎯 শেখার ক্রম (Learning Order)

- ✅ BrowserRouter
- ✅ Routes
- ✅ Route
- ✅ Link
- ✅ NavLink
- ✅ useNavigate
- ✅ Dynamic Route
- ✅ useParams
- ✅ Nested Route
- ✅ Outlet
- ✅ Layout Route
- ✅ 404 Page
- ✅ useLocation
- ✅ useSearchParams
- ✅ Protected Route
- ✅ Navigate Component
- ✅ Lazy Loading
- ✅ Suspense

---

# 🚀 Congratulations!

এখন তুমি React Router-এর **Beginner থেকে Advanced** পর্যন্ত একটি সম্পূর্ণ Roadmap পেয়ে গেলে। প্রতিটি Chapter প্র্যাকটিস করলে তুমি যেকোনো React Project-এ Routing সহজেই Implement করতে পারবে।