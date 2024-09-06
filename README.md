# Pre-requisites

You will need NodeJS installed in your machine/project in order to the load both the `path` and `fs` libraries.

```
npm i node
```

## Install

```
npm i import-alias-file
```

## Description

This npm library eases the process of importing files within a nodejs project.
The way it works it's similar to NextJS!.

I made it after getting tired of using `../` multiple times when I needed to use a function that was placed in a different file!

## Usage

```js
const express = require("express");

const lookFile = require("import-alias-file");

const { getBlogs, getBlog, createBlog } = lookFile("@/controllers/blogs"); // <- That
// Instead of this, '../../../../controllers/blogs';

const Blog = lookFile("@/models/Blog"); // <- That
// Instead of this, '../../../models/Blog;

const router = express.Router();

router.route("/").get(getBlogs).post(createBlog);

router.route("/:id").get(getBlog);

module.exports = router;
```

## Extensions

You can specify the file extension as well.

```js
// This is the same
const { getBlogs, getBlog, createBlog } = lookFile("@/controllers/blogs");
const Blog = lookFile("@/models/Blog");
// as this
const { getBlogs, getBlog, createBlog } = lookFile("@/controllers/blogs.js");
const Blog = lookFile("@/models/Blog.js");
```

The extensions supported so far are `.js`, `.json`, and `.ts`.

## Community

The `import-alias-file` community can be found on [GitHub Discussions](https://github.com/kirasiris/import-alias-file/discussions) where you can ask questions and voice ideas.

## Import-Alias-File Author

- Kevin Fonseca ([@kirasiris](https://github.com/kirasiris))

## Support Me.

Dude, I'm broke. If you find this useful, please don't hesitate to help me maintain it!.

- [PayPal](https://www.paypal.com/paypalme/kirasiris)
- [CashApp](https://cash.app/$kirasiris)
- [Venmo](https://venmo.com/kirasiris)

## Contributing

This library is still too young. I accept any help you guys can provide. The goal is to make the functionality NextJS uses into NodeJS. Please feel free to share your knowledge!

## Hire Me

I'm available to work with you guys. If you need a developer who specializes in MongoDB, Express, ReactJS/NextJS, NodeJS, Php and MySQL, then I'm you're guy!. Reach out to me at `kuaf1998@gmail.com`.

You can also check my portfolio at [my personal blog](https://kevinfonseca.vercel.app/theme).

## Contributors

A list of co-authors that have helped improve this amazing library!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![All Contributors](https://img.shields.io/github/all-contributors/kirasiris/import-alias-file?color=ee8449&style=flat-square)](#contributors)
