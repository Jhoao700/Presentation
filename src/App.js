import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Presentación Personal</h1>
      </header>

      <section className="personal-info">
        <img 
          src="/images/foto.jpeg" // Cambia esta ruta según dónde esté tu foto
          alt="Foto de perfil" 
          className="profile-photo"
        />
        <h2>Nombre: Brayan Jhoao Calderon Escobar</h2>
        <h3>Carrera: Desarrollador Web</h3>
        <p>Correo: jhoao@email.com</p>
        <p>Teléfono: +591 70000000</p>
      </section>

      <section className="education">
        <h2>Estudios</h2>
        <ul>
          <li>Carrera técnica - TECBA</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>React, Node.js, JavaScript</li>
          <li>HTML5, CSS3</li>
          <li>Git, GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Proyectos</h2>
        <ul>
          <li>
            <a 
              href="https://github.com/Jhoao700/presentation" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Proyecto 1
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Jhoao700/react-jhoao" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Proyecto 2
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Jhoao700/crud" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Proyecto 3
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Jhoao700/angular" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Proyecto 3
            </a>
            
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
