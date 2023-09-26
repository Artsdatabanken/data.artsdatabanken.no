const { http } = require('@artsdatabanken/lastejobb')
const { dataUrl } = require('../config')

http.downloadJson(dataUrl+"index.json", "downloadable_files_list.json");
