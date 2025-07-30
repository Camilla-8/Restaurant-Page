export default function createHome() {
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = `
    <h2>CaCaLolu : Greek Restaurant</h2>
    <p>Welcome to our restaurant! Enjoy the best food in town.</p>
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Restaurant" style="width:100%;max-width:400px;display:block;margin:20px auto;">
  `;
  return homeDiv;
} 