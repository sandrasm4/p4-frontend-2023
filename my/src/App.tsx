import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WeatherView, { Weather} from "./components/Weather";
import MainView from "./components/Countries";


export default function App() {
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/weather/:city" element={<WeatherView />} />
        </Routes>
        </BrowserRouter>
    );
}    
  