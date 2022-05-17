import './main.scss';

function AuthMain(props) {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__sidebar"></div>
                    <div className="main__table">{props.children}</div>
                </div>
            </div>
        </main>
    );
}

export default AuthMain;
