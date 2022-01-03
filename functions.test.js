const functions = require("./functions");

// .toBe()
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// .not.toBe()
test("Adds 2 + 2 NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// .toBeNull()
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// .toBeFalsy()
test("should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// .toEqual({})
test("User should be Brad Traversy obj.", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
  // expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  await expect(data.name).toEqual("Leanne Graham");
});
