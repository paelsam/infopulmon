import { Route, Routes } from "react-router"
import { LungDiseasesLayout } from "../layout/LungDiseasesLayout"


export const LungDiseasesRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <LungDiseasesLayout /> } />
    </Routes>
  )
}
