import fs from "fs";

describe("CSV", () => {
  it("should parse a csv file", async function () {
    // read a csv file
    const csvContent = await fs.promises.readFile(
      "./test/fixtures/employees.csv",
      { encoding: "utf-8" }
    );
    console.log("csvContent: ", csvContent);
    // split by line
    // split by field
    // create one json by line
    // create one file per json
  });
});
