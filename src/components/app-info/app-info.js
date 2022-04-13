import './app-info.css';

const AppInfo = ({ data, increased }) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>Total number of employees: {data.length}</h2>
            <h2>The premium will be received: {increased}</h2>
        </div>
    )
}

export default AppInfo;