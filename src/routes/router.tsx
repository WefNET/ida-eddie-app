import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Edward, Ida, Family, Home } from "../pages"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="edward" element={<Edward />} />
                <Route path="ida" element={<Ida />} />
                <Route path="family" element={<Family />} />
            </Routes>
        </BrowserRouter>
    )
}
