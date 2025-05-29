import { usuarios } from "./data";
function App() {
  
  function Usuario({ user, size }) {
    return (
      <div style={{
        display: 'flex', 
        margin: '20px 0', 
        padding: '15px', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginTop: 0 }}>{user.title}</h3>
          <p><strong>Categoria:</strong> {user.category.name}</p>
          <p><strong>Precio:</strong> ${user.price}</p>
          <p><strong>Descripcion:</strong> {user.description}</p>
        </div>
        <div>
          <img 
            src={user.images[0]} 
            alt={user.title} 
            width={size}
            height={size}
            style={{
              borderRadius: '4px',
              objectFit: 'cover',
              marginLeft: '20px'
            }}
          />
        </div>
      </div>
    );
  }

  
  function Profile() {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Catálogo de Productos</h2>
        {usuarios.map(producto => (
          <Usuario
            key={producto.id}
            user={producto}
            size={150}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>Mi Tienda Online</h1>
      </header>
      
      <main style={{ padding: '20px', flex: 1 }}>
        <Profile />
      </main>
      
      <footer style={{
        backgroundColor: '#282c34',
        padding: '10px',
        color: 'white',
        textAlign: 'center'
      }}>
        <p>© 2025 Mi Tienda - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;