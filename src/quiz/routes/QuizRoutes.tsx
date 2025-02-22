import { Route, Routes } from "react-router"
import { QuizLayout } from "../layout/QuizLayout"

export const QuizRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <QuizLayout /> } />
    </Routes>
  )
}
