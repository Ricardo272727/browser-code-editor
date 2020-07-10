const isCssFile = (filename) => /\.css$/.test(filename);
const isJsFile = (filename) => /\.js$/.test(filename);
const isHtmlFile = (filename) => /\.html$/.test(filename);
const isJsxFile = (filename) => /\.jsx$/.test(filename);

const modes = [
  {
    match: isJsFile,
    mode: 'javascript',
  },
  {
    match: isCssFile,
    mode: 'text/css',
  },
  {
    match: isHtmlFile,
    mode: {
      name: "htmlmixed",
      tags: {
        style: [["type", /^text\/(x-)?scss$/, "text/x-scss"],
                            [null, null, "css"]],
        custom: [[null, null, "customMode"]]
      }
    }
  },
  {
    match: isJsxFile,
    mode: 'jsx'
  }
];

export { modes };

