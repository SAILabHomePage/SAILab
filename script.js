document.addEventListener('DOMContentLoaded', function () {
  /* ---------- 모바일 메뉴 ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- 공통 도우미 ---------- */
  const DATA = window.SAIL_DATA || {};

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 저자 문자열 → HTML (교수님 굵게, _학생_ 밑줄)
  function formatAuthors(authors) {
    return esc(authors)
      .replace(/Hyesong Choi/g, '<strong class="pi-name">Hyesong Choi</strong>')
      .replace(/_([^_]+)_/g, '<u class="sail-student">$1</u>');
  }

  const BADGE_CLASS = {
    Paper: 'badge--paper', Grant: 'badge--grant', Talk: 'badge--talk',
    Service: 'badge--service', Media: 'badge--media'
  };
  function badge(cat) {
    return '<span class="badge ' + (BADGE_CLASS[cat] || 'badge--plain') + '">' + esc(cat) + '</span>';
  }

  function relatedLinks(keys) {
    if (!keys || !DATA.articles) return '';
    const urls = keys.map((k) => DATA.articles[k]).filter(Boolean);
    if (!urls.length) return '';
    return ' <span class="news-links">' + urls.map((u, i) =>
      '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">[Related Article ' + (i + 1) + ']</a>'
    ).join(' ') + '</span>';
  }

  function newsRow(item) {
    return '<li class="news-row' + (item.star ? ' is-star' : '') + '">' +
      '<span class="news-row-date">' + esc(item.date) + '</span>' +
      badge(item.cat) +
      '<p class="news-row-text">' + esc(item.text) + relatedLinks(item.links) + '</p>' +
      '</li>';
  }

  const visibleNews = (DATA.news || []).filter((n) => !n.pending);

  /* ---------- Upcoming 상자 ---------- */
  document.querySelectorAll('[data-render="upcoming"]').forEach((box) => {
    const now = new Date();
    const items = (DATA.upcoming || []).filter((u) =>
      !u.until || now <= new Date(u.until + 'T23:59:59+09:00'));
    if (!items.length) { box.hidden = true; return; }
    box.innerHTML = '<p class="news-upcoming-title">Upcoming</p><ul class="news-upcoming-list">' +
      items.map(newsRow).join('') + '</ul>';
  });

  /* ---------- News 목록 (data-limit 개수만큼) ---------- */
  document.querySelectorAll('[data-render="news"]').forEach((list) => {
    const limit = parseInt(list.dataset.limit, 10) || visibleNews.length;
    list.innerHTML = visibleNews.slice(0, limit).map(newsRow).join('');
  });

  /* ---------- Recent Papers by Research Area 카드 ---------- */
  const pubById = {};
  (DATA.publications || []).forEach((p) => { pubById[p.id] = p; });

  function venueLabel(p) {
    if (p.tag === 'Under review') return 'Under review, ' + p.year;
    return p.tag + ' ' + p.year;
  }

  document.querySelectorAll('[data-render="area-cards"]').forEach((grid) => {
    grid.innerHTML = (DATA.pillars || []).map((pillar) => {
      const papers = pillar.homePapers.map((id) => pubById[id]).filter(Boolean);
      return '<a class="area-card" href="research.html#' + esc(pillar.id) + '">' +
        '<h3 class="area-name">' + esc(pillar.name) + '</h3>' +
        '<p class="area-desc">' + esc(pillar.desc) + '</p>' +
        '<ul class="area-papers">' + papers.map((p) =>
          '<li class="area-paper">' +
            '<span class="venue' + (p.top ? ' venue--top' : '') + '">' + esc(venueLabel(p)) + '</span>' +
            '<span class="area-paper-title">[' + esc(p.id) + '] ' + esc(p.title) + '</span>' +
            '<span class="area-paper-authors">' + formatAuthors(p.authors) + '</span>' +
          '</li>').join('') +
        '</ul>' +
        '<span class="area-more">View in Research</span>' +
        '</a>';
    }).join('');
  });

  /* ---------- Research 페이지 주제 탭 (STEP 3 전까지 기존 페이지용) ---------- */
  const topicTabs = document.querySelectorAll('.topic-tab');
  const topicPanels = document.querySelectorAll('.topic-panel');
  const topicDefaultPanel = document.querySelector('.topic-default-panel');

  function activateTopic(topic) {
    if (!topicTabs.length || !topicPanels.length) return;
    const hasTopic = Boolean(topic);
    topicTabs.forEach((tab) => {
      tab.classList.toggle('active', hasTopic && tab.dataset.topic === topic);
    });
    topicPanels.forEach((panel) => {
      panel.classList.toggle('active', hasTopic && panel.dataset.topic === topic);
    });
    if (topicDefaultPanel) topicDefaultPanel.classList.toggle('hidden', hasTopic);
  }

  function updateTopicUrl(topic) {
    const url = new URL(window.location.href);
    if (topic) url.searchParams.set('topic', topic);
    else url.searchParams.delete('topic');
    url.hash = 'research-interest';
    history.replaceState(null, '', url.toString());
  }

  if (topicTabs.length && topicPanels.length) {
    activateTopic(new URLSearchParams(window.location.search).get('topic'));
    topicTabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        const next = tab.classList.contains('active') ? null : tab.dataset.topic;
        activateTopic(next);
        updateTopicUrl(next);
      });
    });
  }
});
