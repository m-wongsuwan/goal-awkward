import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddGoalForm } from '../AddGoalForm';
import { StatusPage } from '../StatusPage'
// import { Landing } from '../Landing';
// import { ChatRoom } from '../ChatRoom';

function AuthenticatedApp() {
    return (
        <>
            <h1>Authenticated</h1>
            <BrowserRouter>
                <Link to='/statuspage'>Status Page</Link>
                <Link to='/'>Add Goal Form</Link>
                <Routes>
                    <Route path="/" element={<AddGoalForm />} />
                    <Route path='/statuspage' element={<StatusPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export { AuthenticatedApp };
