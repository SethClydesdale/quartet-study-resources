// Use on stroke order exercise to check for duplicates within the kanji canvas ref patterns files
for (var i = 0, j = KanjiCanvas.refPatterns.length, logged = {}; i < j; i++) {
  if (!logged[KanjiCanvas.refPatterns[i][0]]) {
    logged[KanjiCanvas.refPatterns[i][0]] = 1;
  } else {
    console.error('Duplicate found: ' + KanjiCanvas.refPatterns[i][0])
  }
}
