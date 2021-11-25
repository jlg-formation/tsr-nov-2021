import fs from "fs";
import readline from "readline";

describe("CSV", () => {
  it("should parse a csv file", async function () {
    this.timeout(30000);
    // mkdir -p ./temp/json-output/
    await fs.promises.mkdir("./temp/json-output", { recursive: true });

    // read a csv file
    const fileStream = fs.createReadStream("./test/fixtures/employees.csv", {
      encoding: "utf-8",
    });

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      console.log(`Line from file: ${line}`);
    }

    // const unixCsvContent = csvContent.replace(/\r/g, "");

    // // split by line
    // const array = unixCsvContent.split("\n");

    // const filterArray = array.filter((line) => line !== "");

    // const dataArray = filterArray.slice(1);

    // const header = filterArray[0];

    // const headerFields = header.split(",");

    // // split by field
    // for (const elt of dataArray) {
    //   const fields = elt.split(",");

    //   const json = {};
    //   for (let i = 0; i < headerFields.length; i++) {
    //     const name = headerFields[i];
    //     json[name] = fields[i];
    //   }

    //   const id = fields[0];
    //   await fs.promises.writeFile(
    //     `./temp/json-output/employe-${id}.json`,
    //     JSON.stringify(json, undefined, 2)
    //   );
    // }
    // create one json by line
    // create one file per json
  });
});
