const express = require('express');

const bodyparser = require('body-parser');

const strouter = express.Router();

strouter.use(bodyparser.json());

strouter.route('/')
    .all( (req, res, next) => {

        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })

    .get( (req, res, next) => {


        res.end("it will show all details of students");

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .post( (req, res, next) => {


        res.end("it will add a student with name " + req.body.name + " and his/her details are" + req.body.details);

    })

    .delete((req, res, next) => {


        res.end("it will delete all details of students");

    });


module.exports = strouter;
