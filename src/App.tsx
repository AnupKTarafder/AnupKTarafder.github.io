import { Routes, Route } from 'react-router-dom'
import { resumeVersions } from './data/resumeVersions'
import ResumePage from './pages/ResumePage'

export default function App() {
  return (
    <Routes>
      {resumeVersions.map((version) => (
        <Route
          key={version.id}
          path={version.route}
          element={<ResumePage data={version} />}
        />
      ))}
    </Routes>
  )
}
