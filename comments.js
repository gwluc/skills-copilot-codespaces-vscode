// create web server

const path = require("path");
// import fs
const fs = require("fs");
// import moment
const moment = require("moment");
// import mongoose
const mongoose = require("mongoose");
// import comment model
const Comment = require("../models/comment");
// import user model
const User = require("../models/user");
// import post model
const Post = require("../models/post");
// import express-validator
const { body, validationResult } = require("express-validator");
// import sanitize
const { sanitizeBody } = require("express-validator");
// import async
const async = require("async");