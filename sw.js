importScripts('conf.js');
jsproxy_config = x => {
  __CONF__ = x;
  importScripts(__FILE__ = x.assets_cdn + 'bundle.c33e24c5.js');
};