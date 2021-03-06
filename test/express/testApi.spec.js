var assert = require('assert');

// To avoid errors
var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;

var request = require('supertest');
var app = require('../../app.js');



describe('Check routes', function() {
    it('tests user routes', function(done) {
        request(app).get("/api/users")
            .set('Accept', 'application/json')
            .expect(200)
            .then((response) => {
                assert(response.body[0].username == 'samsepi0l', 'first user is samsepi0l');
                assert(response.body[0].id       == 1,           'first user id is 1');
                done();
            });
    });

    // it('tests report route', function(done) {
    //     request(app).get('/api/report')
    //         .set('Accept', 'application/json')
    //         .expect(200)
    //         .then((response) => {
    //             assert(response.body[0].name == 'kmom01', 'kmom01');
    //             assert(response.body[1].name == 'kmom02', 'kmom02');
    //             assert(response.body[2].name == 'kmom03', 'kmom03');
    //             done();
    //         });
    // });
    // // gives timeout error
    // it('should return kmom05', function(done) {
    //     request(app).get('/api/report/5')
    //         .set('Accept', 'application/json')
    //         .expect(200)
    //         .then((response) => {
    //             assert(response.body.name == 'kmom05', 'kmom05');
    //             assert(response.body.id == 2, 'kmom02');
    //             done();
    //         });
    // });
});
