var axios = require("axios").default;

const UnitTestConfig = require("src/tests/e2e/unit-test-config");

describe("search", () => {
  it("list", async () => {
    expect.hasAssertions();
    const response = await axios.get("/search?query=gilbert", UnitTestConfig);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("page");
    expect(response.data).toHaveProperty("total_results");
    expect(response.data).toHaveProperty("total_pages");
    expect(response.data).toHaveProperty("results");
    expect(JSON.stringify(response.data.results)).toMatch(/Grape/);
  });
});
