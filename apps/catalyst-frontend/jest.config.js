module.exports = {
  name: 'catalyst-frontend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/catalyst-frontend',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
