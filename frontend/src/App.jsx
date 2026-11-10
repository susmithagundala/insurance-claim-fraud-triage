import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import { DashboardPage, LandingPage, PlaceholderPage } from './pages/Pages.jsx';
const sections = [['claims', 'Claims'], ['investigations', 'Investigations'], ['rejection-approvals', 'Rejection Approvals'], ['evidence', 'Evidence'], ['analytics', 'Analytics']];
export default function App() { return <Routes><Route element={<AppLayout />}><Route index element={<LandingPage />} /><Route path="dashboard" element={<DashboardPage />} />{sections.map(([path, title]) => <Route key={path} path={path} element={<PlaceholderPage title={title} />} />)}<Route path="*" element={<Navigate to="/" replace />} /></Route></Routes>; }
