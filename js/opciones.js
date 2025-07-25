//opciones del menú del inventario.
const contents = [
    `<h2>Panel</h2>
    <p>Bienvenido al panel principal del sistema de inventario.</p>`,
    `<h2>Inventario</h2>
    <p>Aquí puedes ver y gestionar los productos en inventario.</p>`,
    `<h2>Proveedores</h2>
    <p>Lista y gestión de proveedores.</p>`,
    `<h2>Pedidos</h2>
    <p>Consulta y administra los pedidos realizados.</p>`,
    `<h2>Alertas</h2>
    <p>Visualiza alertas críticas y notificaciones del sistema.</p>`,
    `<h2>Configuraciones</h2>
    <p>Visualiza alertas críticas y notificaciones del sistema.</p>`
];

function showContent(index) {
    document.getElementById('content').innerHTML = contents[index];
    document.querySelectorAll('nav button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}
