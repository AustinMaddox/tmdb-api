var axios = require("axios").default;

const UnitTestConfig = require("src/tests/e2e/unit-test-config");

describe("detail", () => {
  it("read", async () => {
    expect.hasAssertions();
    const response = await axios.get("/detail/603", UnitTestConfig);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("adult");
    expect(response.data).toHaveProperty("genres");
    expect(response.data).toHaveProperty("homepage");
    expect(response.data.title).toBe("The Matrix");
    expect(JSON.stringify(response.data)).toMatch(/hacker/);
  });
});
