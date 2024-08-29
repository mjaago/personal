module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "x-hide-banner",
            value: "1",
          },
        ],
        permanent: true,
        destination: "/about",
      },
    ];
  },
};
