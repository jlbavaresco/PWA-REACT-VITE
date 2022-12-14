import.meta.env.VITE_APP_ENDERECO_API;

const Home = () => (
    <div>
        <h1>Salas de Aula - PWA</h1>
        <h1>{import.meta.env.VITE_APP_ENDERECO_API}</h1>
    </div>
)

export default Home;