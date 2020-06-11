var axios = require("axios").default;

const UnitTestConfig = require("src/tests/e2e/unit-test-config");

describe("popular", () => {
  it("list", async () => {
    expect.hasAssertions();
    const response = await axios.get("/popular", UnitTestConfig);
    expect(response.status).toBe(200);
    expect(response.data.total_results).toBe(
      response.data.results.length * response.data.total_pages
    );
  });
});
