const express = require('express');
const articleRouter = require('./routes/articles')
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);


app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description, the first test for article'
    },
    {
    title: 'Test Article2',
    createdAt: new Date(),
    description: 'Test Description 2'
    }]
    res.render('index', {articles: articles});
})
app.listen(5001);