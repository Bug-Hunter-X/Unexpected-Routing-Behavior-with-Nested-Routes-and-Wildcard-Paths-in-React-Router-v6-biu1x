```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactContainer />}>
          <Route path="/:id" element={<ContactDetails />} />
          <Route path="*" element={<ContactDefault />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }
function About() { return <div>About</div>; }

function ContactContainer() {
  return <div>Contact Container</div>;
}

function ContactDetails() {
  let { id } = useParams();
  return <div>Contact Details for ID: {id}</div>;
}

function ContactDefault() {
  return <div>Default Contact Page</div>;
}

export default App;
```