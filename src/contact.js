export default function createContact() {
  const contactDiv = document.createElement('div');
  contactDiv.innerHTML = `
    <h2>Contact</h2>
    <p>Phone: 8888-8000</p>
    <p>Address: Singapore</p>
    <p>Email: info@restaurant.com</p>
  `;
  return contactDiv;
} 