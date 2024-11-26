const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const database = args[0];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(database);
      res.end(output);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(1245);

module.exports = app;
