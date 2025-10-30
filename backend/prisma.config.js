require("dotenv").config(); // 👈 loads .env manually
const { defineConfig } = require("prisma/config");

module.exports = defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL, // 👈 tell Prisma where to get it
  },
});
