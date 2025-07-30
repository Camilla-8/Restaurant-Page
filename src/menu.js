export default function createMenu() {
  const menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
    <h2>Menu</h2>
    <ul>
      <li>Octopus - $50</li>
      <li>Beef Steak - $83</li>
      <li>Party Platter - $100</li>
    </ul>
  `;
  return menuDiv;
} 