/*jslint browser: true, indent: 2, plusplus: true */
/*exported jsTextChange, getSelText, getSelStart, getSelEnd, getIdLength, getSelTextBefore, getSelTextAfter, getSelWord */

function jsTextChange(idfrom, idto) {
  'use strict';
  document.getElementById(idto).innerHTML = document.getElementById(idfrom).value;
}

function getSelText() {
  'use strict';
  var txt = '';
  if (window.getSelection) {
    txt = window.getSelection();
  } else if (document.getSelection) {
    txt = document.getSelection();
  } else if (document.selection) {
    txt = document.selection.createRange().text;
  } else {
    return;
  }

  return txt;
}

function getSelStart(id) {
  'use strict';
  return document.getElementById(id).selectionStart;
}

function getSelEnd(id) {
  'use strict';
  return document.getElementById(id).selectionEnd;
}

function getIdLength(id) {
  'use strict';
  return document.getElementById(id).value.length;
}

function getSelTextBefore(id) {
  'use strict';
  var input, start;
  input = document.getElementById(id);
  start = input.selectionStart;
  return input.value.substr(0, start);
}

function getSelTextAfter(id) {
  'use strict';
  var input, end;
  input = document.getElementById(id);
  end = input.selectionEnd;
  return input.value.substr(end);
}

function getSelWord(id) {
  'use strict';
  var input, text, start, wordstart, wordend, i;
  input = document.getElementById(id);
  text = input.value + '.';
  start = input.selectionStart;
  wordstart = 0;
  wordend = 0;
  //charAt
  for (i = start; i > 0; i--) {
    if (((text.charCodeAt(i) > 0x1f) && (text.charCodeAt(i) < 0x30)) || ((text.charCodeAt(i) > 0x39) && (text.charCodeAt(i) < 0x41))) {
      wordstart = i;
      i = 0;
    }
  }
  for (i = start; i < text.length; i++) {
    if (((text.charCodeAt(i) > 0x1f) && (text.charCodeAt(i) < 0x30)) || ((text.charCodeAt(i) > 0x39) && (text.charCodeAt(i) < 0x41))) {
      wordend = i;
      i = text.length;
    }
  }
  return text.substring(wordstart, wordend);
  //document.getElementById('clickedword').innerHTML = text.substring(wordstart, wordend);
  //return 'start: '+wordstart+'; wordend: '+wordend+'; '+"\n\n\n"+text.substring(wordstart, wordend);
}