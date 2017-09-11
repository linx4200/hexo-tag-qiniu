const util = require('hexo-util');

hexo.extend.tag.register('qiniu', function(args) {
  const source = args[0];
  if (!source) {
    return '';
  }

  const name = args[1];
  let url = `/${this.path}${source}`

  if(hexo.env && hexo.env.env === 'production' && hexo.config.qiniu && hexo.config.qiniu.urlPrefix) {
    url = `${hexo.config.qiniu.urlPrefix}${this.path}${source}`
  }

  return `<img src="${url}" title="${name}" alt="${name}">`

});