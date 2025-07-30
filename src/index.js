import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

// header/nav와 버튼 생성
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  
  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  homeBtn.id = 'homeBtn';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.id = 'menuBtn';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.id = 'contactBtn';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  header.appendChild(nav);
  return header;
}

function setActiveButton(btn) {
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function loadTab(tabFunc, btn) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(tabFunc());
  setActiveButton(btn);
}

function initializePage() {
  // body에 header/nav와 content div 추가
  const body = document.body;
  body.innerHTML = '';
  body.appendChild(createHeader());
  const contentDiv = document.createElement('div');
  contentDiv.id = 'content';
  body.appendChild(contentDiv);

  // 기본 Home 탭 로드
  const homeBtn = document.getElementById('homeBtn');
  const menuBtn = document.getElementById('menuBtn');
  const contactBtn = document.getElementById('contactBtn');

  homeBtn.addEventListener('click', () => loadTab(createHome, homeBtn));
  menuBtn.addEventListener('click', () => loadTab(createMenu, menuBtn));
  contactBtn.addEventListener('click', () => loadTab(createContact, contactBtn));

  loadTab(createHome, homeBtn);
}

initializePage();
