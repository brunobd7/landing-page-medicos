/* Monta o conteúdo das páginas a partir de assets/js/dados.js.
   Não é preciso editar este arquivo para trocar dados. */
(function () {
  'use strict';
  var S = window.SITE;
  if (!S) return;

  // ---------- utilidades ----------
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function digitos(v) { return String(v || '').replace(/\D/g, ''); }
  function waHref(p) {
    return 'https://wa.me/' + digitos(p.whatsappNumero) + '?text=' + encodeURIComponent(S.mensagemWhatsApp || '');
  }
  function mapsHref(end) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(end);
  }
  function $(sel) { return document.querySelector(sel); }
  function render(sel, html) { var el = $(sel); if (el) el.innerHTML = html; }

  var I = {
    pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A98276" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    pinG: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34452F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    wa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19l-4 1z"/></svg>',
    tel: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34452F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34452F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    ig: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34452F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
    hora: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34452F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };

  function foto(src, alt, etiqueta, classe) {
    if (src) {
      return '<div class="foto ' + classe + '"><img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async"></div>';
    }
    return '<div class="foto ' + classe + '" role="img" aria-label="' + esc(alt) + '">' +
      (etiqueta ? '<span class="foto__etiqueta">' + esc(etiqueta) + '</span>' : '') + '</div>';
  }
  function logo(src, alt) {
    return src ? '<img class="logo-img" src="' + esc(src) + '" alt="' + esc(alt) + '">'
               : '<span class="logo-ph">[LOGOTIPO]</span>';
  }
  function canais(p, comHorario) {
    var h = '<div class="canais">';
    h += '<a class="canal" href="tel:+' + digitos(p.telefoneNumero) + '">' + I.tel +
         '<span class="canal__txt"><small>Telefone</small><strong>' + esc(p.telefone) + '</strong></span></a>';
    h += '<a class="canal" href="mailto:' + esc(p.email) + '">' + I.mail +
         '<span class="canal__txt"><small>E-mail profissional</small><strong>' + esc(p.email) + '</strong></span></a>';
    if (p.instagram) {
      h += '<a class="canal" href="https://instagram.com/' + esc(p.instagramUsuario) + '" target="_blank" rel="noopener">' + I.ig +
           '<span class="canal__txt"><small>Instagram profissional</small><strong>' + esc(p.instagram) + '</strong></span></a>';
    }
    if (comHorario && p.horarios) {
      h += '<div class="canal">' + I.hora +
           '<span class="canal__txt"><small>Horários de atendimento</small><strong>' + esc(p.horarios) + '</strong></span></div>';
    }
    return h + '</div>';
  }
  function btnWa(p, texto, extra) {
    return '<a class="btn btn--primario ' + (extra || '') + '" href="' + waHref(p) + '" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp com ' + esc(p.nome) + '">' + I.wa + esc(texto) + '</a>';
  }

  var P = S.profissionais || [];

  // ---------- comum ----------
  document.querySelectorAll('[data-logo]').forEach(function (el) { el.innerHTML = logo(S.logo, S.marca); });
  document.querySelectorAll('[data-logo-claro]').forEach(function (el) { el.innerHTML = logo(S.logoClaro || S.logo, S.marca); });
  document.querySelectorAll('[data-ano]').forEach(function (el) { el.textContent = S.ano; });
  document.querySelectorAll('[data-marca]').forEach(function (el) { el.textContent = S.marca; });
  document.querySelectorAll('[data-rt]').forEach(function (el) { el.textContent = S.responsavelTecnico; });
  document.querySelectorAll('[data-privacidade]').forEach(function (el) { el.setAttribute('href', S.politicaPrivacidadeUrl || '#'); });

  // ---------- página principal ----------
  render('#hero-foto', foto(S.fotoAmbiente, 'Ambiente do consultório com luz natural', '[Fotografia — ambiente do consultório, luz natural]', 'hero__foto'));

  render('#lista-perfis', P.map(function (p) {
    return '<article class="perfil">' +
      foto(p.foto, 'Fotografia profissional de ' + p.nome, '[Fotografia profissional]', 'perfil__foto') +
      '<div class="perfil__corpo">' +
        '<div class="perfil__cab"><span class="rotulo">' + esc(p.titulo) + '</span>' +
        '<h3 class="perfil__nome">' + esc(p.nome) + '</h3>' +
        '<span class="perfil__crm">CRM ' + esc(p.crm) + '</span></div>' +
        '<ul class="chips" aria-label="Especialidades">' + p.especialidades.map(function (e) { return '<li class="chip">' + esc(e.nome) + '</li>'; }).join('') + '</ul>' +
        '<p class="perfil__bio">' + esc(p.bio) + '</p>' +
        '<ul class="perfil__locais"><li class="perfil__locais-titulo">Locais de atendimento</li>' +
          p.locais.map(function (l) { return '<li>' + I.pin + esc(l.nome) + '</li>'; }).join('') + '</ul>' +
        '<div class="perfil__acoes">' + btnWa(p, 'WhatsApp') + '<a class="btn btn--contorno" href="#contato">Outros contatos</a></div>' +
      '</div></article>';
  }).join(''));

  render('#lista-especialidades', P.map(function (p) {
    return '<div class="esp__card"><div><span class="rotulo">' + esc(p.titulo) + '</span>' +
      '<div class="esp__nome-prof">' + esc(p.nome) + '</div></div>' +
      '<ul class="esp__lista">' + p.especialidades.map(function (e) {
        return '<li><strong>' + esc(e.nome) + '</strong>' + (e.resumo ? '<span>' + esc(e.resumo) + '</span>' : '') + '</li>';
      }).join('') + '</ul></div>';
  }).join(''));

  render('#lista-locais', P.map(function (p) {
    return '<div class="locais__grupo"><div class="locais__cab"><h3>' + esc(p.nome) + '</h3><span>' + esc(p.titulo) + '</span></div>' +
      '<div class="locais__grid">' + p.locais.map(function (l) {
        return '<div class="local"><div class="local__topo"><span class="local__icone">' + I.pinG + '</span>' +
          '<div><div class="local__nome">' + esc(l.nome) + '</div><div class="local__end">' + esc(l.endereco) + '</div></div></div>' +
          '<a class="textlink" href="' + mapsHref(l.endereco) + '" target="_blank" rel="noopener" aria-label="Ver localização de ' + esc(l.nome) + ' no Google Maps">Ver localização</a></div>';
      }).join('') + '</div></div>';
  }).join(''));

  render('#lista-contatos', P.map(function (p) {
    return '<div class="contato"><div><span class="rotulo">' + esc(p.titulo) + '</span>' +
      '<div class="contato__nome">' + esc(p.nome) + '</div></div>' +
      btnWa(p, 'Conversar no WhatsApp', 'btn--lg') + canais(p, false) + '</div>';
  }).join(''));

  render('#footer-profissionais', P.map(function (p) {
    return '<div class="footer__prof"><strong>' + esc(p.nome) + '</strong><span>CRM ' + esc(p.crm) + '</span></div>';
  }).join(''));
  render('#footer-contatos', '<span class="footer__titulo">Contatos</span>' + P.map(function (p) {
    return '<div class="footer__grupo"><span>' + esc(p.nome) + '</span>' +
      '<a class="footer__link" href="' + waHref(p) + '" target="_blank" rel="noopener">' + esc(p.whatsapp) + '</a>' +
      '<a class="footer__link" href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a></div>';
  }).join(''));

  // ---------- página de contato ----------
  render('#contato-pagina', P.map(function (p) {
    var esp = p.especialidades.map(function (e) { return e.nome; }).join(', ');
    return '<article class="contato contato-pg__card">' +
      '<div class="contato-pg__cab">' + foto(p.foto, 'Fotografia de ' + p.nome, '', 'contato-pg__avatar') +
        '<div><span class="rotulo">' + esc(p.titulo) + '</span><h2 class="contato__nome">' + esc(p.nome) + '</h2>' +
        '<span class="perfil__crm">' + esc(esp) + ' · CRM ' + esc(p.crm) + '</span></div></div>' +
      btnWa(p, 'Conversar no WhatsApp', 'btn--lg') + canais(p, true) +
      '<div class="contato-pg__locais"><span class="perfil__locais-titulo">Locais de atendimento</span>' +
        p.locais.map(function (l) {
          return '<div class="contato-pg__local"><div><strong>' + esc(l.nome) + '</strong><span>' + esc(l.endereco) + '</span></div>' +
            '<a class="textlink" href="' + mapsHref(l.endereco) + '" target="_blank" rel="noopener" aria-label="Ver localização de ' + esc(l.nome) + ' no Google Maps">Ver localização</a></div>';
        }).join('') + '</div></article>';
  }).join(''));

  // ---------- menu mobile ----------
  var toggle = $('.nav-toggle'), menu = $('.nav-mobile');
  if (toggle && menu) {
    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }
    toggle.addEventListener('click', function () { setOpen(!menu.classList.contains('is-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }
})();
