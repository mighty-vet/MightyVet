const controller=require('./controller');
module.exports=function(app){
    app
    .get('/api/mentees', controller.menteeAll)
    .post('/api/mentees', controller.menteeNew)
    .get('/api/mentees/:id', controller.menteeDetails)
    .put('/api/mentees/:id', controller.menteeUpdate)
    .delete('/api/mentees/:id', controller.menteeRemove)
}