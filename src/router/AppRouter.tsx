import { Route, Routes } from "react-router"
import { LandingLayout } from "../landing/layout/LandingLayout"
import { LungDiseasesRoutes } from "../lung-diseases/routes/LungDiseasesRoutes"
import { QuizRoutes } from "../quiz/routes/QuizRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/enfermedades/*" element={ <LungDiseasesRoutes /> } />
        <Route path="/quiz/*" element={ <QuizRoutes /> } />
    </Routes>
  )
}
