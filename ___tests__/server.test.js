'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/not found'); // async
        expect(response.status).toEqual(404);
    });

    it('handles not found request', async () => {
        // add test
        const response = await request.post('/person'); // async
        expect(response.status).toEqual(404);
    });

});


describe('my API Server', ()=> {
    let obj={
        clothesName:"Knafa",
        contryclothes:"Jordan"
    };
    let id=-1;
    it('handles all clothes from database requsest', async () => {
        // add test
        const response = await request.get('/clothes'); 
        expect(response.status).toEqual(200);
    });
    it('handles one spicific clothes database request', async () => {
        // add test
        const response = await request.get('/clothes/2'); 
        expect(response.status).toEqual(200);
    });

    it('handles post for database request', async () => {
        const response = await request.post('/clothes').send(obj)
        id=response.body.id;
        expect(response.status).toEqual(200)
    });
    it('handles delet one spicific clothes database request', async () => {
        // add test
        const response = await request.delete('/clothes/3');
        expect(response.status).toEqual(204);
    });
    it('handles update spicific clothes database request', async () => {
        // add test
        const response = await request.put('/clothes/4');
        expect(response.status).toEqual(200);
    });
});

describe('my API Server', ()=> {
    let obj={
        clothesName:"boots",
        contryclothes:"USA"
    };
    let id=-1;
    it('handles all clothes from database requsest', async () => {
        // add test
        const response = await request.get('/clothes'); 
        expect(response.status).toEqual(200);
    });
    it('handles one spicific clothes database request', async () => {
        // add test
        const response = await request.get('/clothes/2'); 
        expect(response.status).toEqual(200);
    });

    it('handles post for database request', async () => {
        const response = await request.post('/clothes').send(obj)
        id=response.body.id;
        expect(response.status).toEqual(200)
    });
    it('handles delet one spicific clothes database request', async () => {
        // add test
        const response = await request.delete('/clothes/3');
        expect(response.status).toEqual(204);
    });
    it('handles update spicific clothes database request', async () => {
        // add test
        const response = await request.put('/clothes/4');
        expect(response.status).toEqual(200);
    });
});

