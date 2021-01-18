module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        debug: false,
        useBuiltIns: 'entry',
        targets: {
          node: 'current'
        }
      }
    ],
    ['@vue/app', { useBuiltIns: 'entry' }]
  ]
};
