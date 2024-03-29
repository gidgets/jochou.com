import jsonData from 'https://jochou.com/js/aslcheatsheet.json' assert { type: "json" };
document.getElementById('json-container').innerHTML = JSON.stringify(jsonData);