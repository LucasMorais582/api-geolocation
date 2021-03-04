import app from './app';

app.use('/test-connection', (request, response) =>{
  return response.json("FALA MEU MANO.");
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
