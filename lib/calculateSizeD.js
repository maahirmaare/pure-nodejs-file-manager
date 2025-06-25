const fs = require('fs');
const path = require('path');

function getFolderSize(folderPath) {
  let totalSize = 0;

  function calculate(p) {
    const stats = fs.statSync(p);
    if (stats.isFile()) {
      totalSize += stats.size;
    } else if (stats.isDirectory()) {
      const entries = fs.readdirSync(p);
      for (const entry of entries) {
        calculate(path.join(p, entry));
      }
    }
  }

  calculate(folderPath);
  return totalSize;
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 B';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

const calculateSizeD = fullPath => {
  const sizeInBytes = getFolderSize(fullPath);
  const humanReadable = formatBytes(sizeInBytes);
  return [humanReadable, sizeInBytes];
};

module.exports = calculateSizeD;
