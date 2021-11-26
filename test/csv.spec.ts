import fs from "fs";

describe("CSV", () => {
  it("should parse a csv file", async function () {
    // mkdir -p ./temp/json-output/
    await fs.promises.mkdir("./temp/json-output", { recursive: true });

    // read a csv file
    const csvContent = await fs.promises.readFile(
      "./test/fixtures/employees.csv",
      { encoding: "utf-8" }
    );
    console.log("csvContent: ", csvContent);
    const unixCsvContent = csvContent.replace(/\r/g, "");
    console.log("unixCsvContent: ", unixCsvContent);
    // split by line
    const array = unixCsvContent.split("\n");
    console.log("array: ", array);
    const filterArray = array.filter((line) => line !== "");
    console.log("filterArray: ", filterArray);
    const dataArray = filterArray.slice(1);
    console.log("dataArray: ", dataArray);

    const header = filterArray[0];
    console.log("header: ", header);
    const headerFields = header.split(",");
    console.log("headerFields: ", headerFields);

    // split by field
    for (const elt of dataArray) {
      console.log("elt: ", elt);
      const fields = elt.split(",");
      console.log("fields: ", fields);
      const json = {};
      for (let i = 0; i < headerFields.length; i++) {
        const name = headerFields[i];
        json[name] = fields[i];
      }
      console.log("json: ", json);
      const id = fields[0];
      await fs.promises.writeFile(
        `./temp/json-output/employe-${id}.json`,
        JSON.stringify(json, undefined, 2)
      );
    }
    // create one json by line
    // create one file per json
  });
});
