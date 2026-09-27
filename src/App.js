import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>ReactFlowGuard</h1>
        <p>React CI/CD Pipeline Dashboard</p>
      </header>

      <main className="container">

        <section className="hero">
          <h2>Automated CI/CD Pipeline</h2>
          <p>
            Every code change is automatically tested, built,
            and deployed using GitHub Actions.
          </p>
        </section>

        <section className="pipeline">

          <div className="stage">
            <div className="icon">1</div>
            <h3>Code Push</h3>
            <p>Developer pushes code to GitHub.</p>
          </div>

          <div className="arrow">→</div>

          <div className="stage">
            <div className="icon">2</div>
            <h3>Install</h3>
            <p>Dependencies are installed.</p>
          </div>

          <div className="arrow">→</div>

          <div className="stage">
            <div className="icon">3</div>
            <h3>Test</h3>
            <p>Automated tests are executed.</p>
          </div>

          <div className="arrow">→</div>

          <div className="stage">
            <div className="icon">4</div>
            <h3>Build</h3>
            <p>Production build is created.</p>
          </div>

          <div className="arrow">→</div>

          <div className="stage">
            <div className="icon">5</div>
            <h3>Deploy</h3>
            <p>Application is deployed.</p>
          </div>

        </section>

        <section className="status">
          <h2>Pipeline Status</h2>

          <div className="status-grid">

            <div className="status-card">
              <h3>Continuous Integration</h3>
              <p>✓ Dependencies installed</p>
              <p>✓ Tests executed</p>
              <p>✓ Application built</p>
            </div>

            <div className="status-card">
              <h3>Continuous Deployment</h3>
              <p>✓ Build published</p>
              <p>✓ GitHub Pages deployment</p>
              <p>✓ Application available online</p>
            </div>

          </div>
        </section>

      </main>

      <footer>
        <p>ReactFlowGuard | GitHub Actions CI/CD</p>
      </footer>
    </div>
  );
}

export default App;