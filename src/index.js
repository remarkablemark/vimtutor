import registerServiceWorker from './registerServiceWorker';
import vimtutor from './vimtutor.txt';

const editorElement = document.getElementById('editor');
editorElement.value = vimtutor;

window.CodeMirror.fromTextArea(editorElement, {
  autofocus: true,
  keyMap: 'vim',
  inputStyle: 'contenteditable',
  lineNumbers: true,
  matchBrackets: true,
  mode: 'text/plain',
});

registerServiceWorker();
