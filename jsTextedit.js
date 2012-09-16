function jsTextInfo(id)
  {
    document.getElementById('clickedword').innerHTML = getSelWord(id);
    document.getElementById('getselstart').innerHTML = getSelStart(id);
    document.getElementById('getselend').innerHTML = getSelEnd(id);
    document.getElementById('getidlength').innerHTML = getIdLength(id);
    document.getElementById('getseltext').innerHTML = getSelText(id);
    jsTextChange('textareai', 'textdivi');
  }

function jsTextChange(idfrom, idto)
  {
    document.getElementById(idto).innerHTML = document.getElementById(idfrom).value;
  }

function getSelText()
  {
    var txt = '';
    if(window.getSelection)
      {
        txt = window.getSelection();
      }
    else if(document.getSelection)
      {
        txt = document.getSelection();
      }
    else if(document.selection)
      {
        txt = document.selection.createRange().text;
      }
    else
      {
        return;
      }
    
    return txt;
  }

function getSelStart(id)
  {
    return document.getElementById(id).selectionStart;
  }

function getSelEnd(id)
  {
    return document.getElementById(id).selectionEnd;
  }

function getIdLength(id)
  {
    return document.getElementById(id).value.length;
  }

function getSelTextBefore(id)
  {
    var input = document.getElementById(id);
    var start = input.selectionStart;
    return input.value.substr(0, start);
  }

function getSelTextAfter(id)
  {
    var input = document.getElementById(id);
    var end   = input.selectionEnd;
    return input.value.substr(end);
  }

function getSelWord(id)
  {
    var input = document.getElementById(id);
    var text  = input.value+'.';
    var start = input.selectionStart;
    var wordstart = 0, wordend = 0;
    //charAt
    for(var i = start; i > 0; i--)
      {
        if(((text.charCodeAt(i) > 0x1f)&&(text.charCodeAt(i) < 0x30))||((text.charCodeAt(i) > 0x39)&&(text.charCodeAt(i) < 0x41)))
          {
            wordstart = i;
            i=0;
          }
      }
    for(var i = start; i < text.length; i++)
      {
        if(((text.charCodeAt(i) > 0x1f)&&(text.charCodeAt(i) < 0x30))||((text.charCodeAt(i) > 0x39)&&(text.charCodeAt(i) < 0x41)))
          {
            wordend = i;
            i=text.length;
          }
      }
    return text.substring(wordstart, wordend);
    //document.getElementById('clickedword').innerHTML = text.substring(wordstart, wordend);
    //return 'start: '+wordstart+'; wordend: '+wordend+'; '+"\n\n\n"+text.substring(wordstart, wordend);
  }
