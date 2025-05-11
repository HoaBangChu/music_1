function batNhac(img) {
  var nhac = img.previousElementSibling;

  document.querySelectorAll("audio").forEach((x) => {
    if (x !== nhac) x.pause();
  });

  if (nhac.paused) {
    nhac.play();
  } else {
    nhac.pause();
  }
}
