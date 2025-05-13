// Nhán vào thẻ p
function batNhac(p) {
  var nhac;
  nhac = p.previousElementSibling;

  document.querySelectorAll("audio").forEach((x) => {
    if (x !== nhac) x.pause();
  });

  if (nhac.paused) {
    nhac.play();
  } else {
    nhac.pause();
  }
}

// Nhấn vào phần tử h2
function batNhac(h2) {
  var nhac = h2.previousElementSibling;

  document.querySelectorAll("audio").forEach((x) => {
    if (x !== nhac) x.pause();
  });

  if (nhac.paused) {
    nhac.play();
  } else {
    nhac.pause();
  }
}

// Nhấn vào ảnh
