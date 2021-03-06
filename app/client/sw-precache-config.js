module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  maximumFileSizeToCacheInBytes: 30000000,
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.jpg',
    'dist/**.js',
    'dist/**.css',
    'dist/**.map'
  ]
};
