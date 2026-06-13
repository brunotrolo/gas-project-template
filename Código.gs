function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Bob Esponja — Fenda do Biquíni')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
